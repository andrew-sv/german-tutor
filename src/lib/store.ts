"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { Locale } from "./types";
import {
  type Grade,
  type ReviewItem,
  newReviewItem,
  review,
} from "./srs";

/** Day key like "2026-05-31" in local time, for streak tracking. */
function dayKey(d = new Date()): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
    d.getDate()
  ).padStart(2, "0")}`;
}

function daysBetween(a: string, b: string): number {
  const da = new Date(a + "T00:00:00");
  const db = new Date(b + "T00:00:00");
  return Math.round((db.getTime() - da.getTime()) / 86_400_000);
}

interface Streak {
  count: number;
  lastActiveDay: string | null;
}

interface AppState {
  hasHydrated: boolean;

  nativeLanguage: Locale;
  completedLessons: string[];
  reviewItems: Record<string, ReviewItem>;
  streak: Streak;

  // actions
  setNativeLanguage: (l: Locale) => void;
  completeLesson: (lessonId: string) => void;
  /** Ensure a review item exists, returning it. */
  ensureItem: (id: string) => ReviewItem;
  /** Grade a review item, scheduling its next due date. */
  gradeItem: (id: string, grade: Grade) => void;
  /** Mark today as active for the streak. */
  recordActivity: () => void;
  resetProgress: () => void;
}

export const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      hasHydrated: false,
      nativeLanguage: "ru",
      completedLessons: [],
      reviewItems: {},
      streak: { count: 0, lastActiveDay: null },

      setNativeLanguage: (l) => set({ nativeLanguage: l }),

      completeLesson: (lessonId) =>
        set((s) => ({
          completedLessons: s.completedLessons.includes(lessonId)
            ? s.completedLessons
            : [...s.completedLessons, lessonId],
        })),

      ensureItem: (id) => {
        const existing = get().reviewItems[id];
        if (existing) return existing;
        const item = newReviewItem(id);
        set((s) => ({ reviewItems: { ...s.reviewItems, [id]: item } }));
        return item;
      },

      gradeItem: (id, grade) =>
        set((s) => {
          const current = s.reviewItems[id] ?? newReviewItem(id);
          return {
            reviewItems: { ...s.reviewItems, [id]: review(current, grade) },
          };
        }),

      recordActivity: () =>
        set((s) => {
          const today = dayKey();
          const last = s.streak.lastActiveDay;
          if (last === today) return s;
          const gap = last ? daysBetween(last, today) : Infinity;
          const count = gap === 1 ? s.streak.count + 1 : 1;
          return { streak: { count, lastActiveDay: today } };
        }),

      resetProgress: () =>
        set({
          completedLessons: [],
          reviewItems: {},
          streak: { count: 0, lastActiveDay: null },
        }),
    }),
    {
      name: "germantutor-v1",
      storage: createJSONStorage(() => localStorage),
      partialize: (s) => ({
        nativeLanguage: s.nativeLanguage,
        completedLessons: s.completedLessons,
        reviewItems: s.reviewItems,
        streak: s.streak,
      }),
      onRehydrateStorage: () => (state) => {
        if (state) state.hasHydrated = true;
      },
    }
  )
);
