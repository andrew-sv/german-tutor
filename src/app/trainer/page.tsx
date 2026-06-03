"use client";

import { useMemo, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { useStore } from "@/lib/store";
import type { Grade } from "@/lib/srs";
import { allWords, getWord, trainerCategories, wordsInCategory } from "@/content";
import { CEFR_LEVELS, type CEFRLevel } from "@/lib/types";
import { cn } from "@/lib/cn";
import { Badge, Button, Card, ProgressBar } from "@/components/ui";
import { Flashcard } from "@/components/Flashcard";
import { Hydrated } from "@/components/Hydrated";

const SESSION_CAP = 30;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function Trainer() {
  const { t, tc } = useI18n();
  const ensureItem = useStore((s) => s.ensureItem);
  const gradeItem = useStore((s) => s.gradeItem);
  const recordActivity = useStore((s) => s.recordActivity);

  const cats = useMemo(() => trainerCategories(), []);
  const levels = useMemo(() => CEFR_LEVELS.filter((l) => allWords.some((w) => w.level === l)), []);
  const [level, setLevel] = useState<CEFRLevel | "all">("all");
  const [queue, setQueue] = useState<string[] | null>(null);
  const [idx, setIdx] = useState(0);

  const inLevel = (w: { level: CEFRLevel }) => level === "all" || w.level === level;

  function start(categoryId: string | "all") {
    const base = categoryId === "all" ? allWords : wordsInCategory(categoryId);
    const pool = base.filter(inLevel);
    if (pool.length === 0) return;
    const ids = shuffle(pool.map((w) => w.id)).slice(0, SESSION_CAP);
    ids.forEach((id) => ensureItem(`word:${id}`));
    recordActivity();
    setQueue(ids);
    setIdx(0);
  }

  // --- Picker ---
  if (!queue) {
    return (
      <div className="flex flex-col gap-5">
        <div>
          <h1 className="text-2xl font-bold text-zinc-900">{t("trainerTitle")}</h1>
          <p className="mt-1 text-zinc-500">{t("trainerIntro")}</p>
        </div>

        <div className="flex gap-2">
          {(["all", ...levels] as const).map((l) => (
            <button
              key={l}
              onClick={() => setLevel(l as CEFRLevel | "all")}
              className={cn(
                "rounded-lg px-3 py-1.5 text-sm font-semibold transition-colors",
                level === l ? "bg-zinc-900 text-white" : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
              )}
            >
              {l === "all" ? tc({ ru: "Все уровни", en: "All levels", uk: "Усі рівні" }) : l}
            </button>
          ))}
        </div>

        <button
          onClick={() => start("all")}
          className="rounded-2xl border border-indigo-200 bg-indigo-50 px-5 py-4 text-left transition-colors hover:bg-indigo-100"
        >
          <span className="text-lg font-semibold text-indigo-900">🎲 {t("allCategories")}</span>
          <span className="block text-sm text-indigo-700">
            {allWords.filter(inLevel).length} {t("wordsUnit")}
          </span>
        </button>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {cats
            .map((c) => ({ c, count: wordsInCategory(c.id).filter(inLevel).length }))
            .filter(({ count }) => count > 0)
            .map(({ c, count }) => (
              <button
                key={c.id}
                onClick={() => start(c.id)}
                className="flex items-center justify-between rounded-xl border border-zinc-200 bg-white px-4 py-3 text-left transition-colors hover:border-indigo-300 hover:bg-indigo-50"
              >
                <span className="font-medium text-zinc-900">
                  {c.icon} {tc(c.title)}
                </span>
                <Badge tone="zinc">{count}</Badge>
              </button>
            ))}
        </div>
      </div>
    );
  }

  // --- Done ---
  if (idx >= queue.length) {
    return (
      <Card className="flex flex-col items-center gap-4 py-10 text-center">
        <span className="text-5xl">🏆</span>
        <p className="text-lg font-semibold text-zinc-900">{t("sessionDone")}</p>
        <div className="flex gap-3">
          <Button onClick={() => setQueue(null)}>{t("trainerTitle")}</Button>
          <Button href="/practice" variant="secondary">
            {t("nav_practice")}
          </Button>
        </div>
      </Card>
    );
  }

  // --- Drill ---
  const id = queue[idx];
  const word = getWord(id);
  const grade = (g: Grade) => {
    gradeItem(`word:${id}`, g);
    setIdx((i) => i + 1);
  };
  if (!word) {
    // Skip an orphaned id without rendering.
    grade("good");
    return null;
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <button onClick={() => setQueue(null)} className={cn("text-sm text-zinc-400 hover:text-zinc-700")}>
          ← {t("trainerTitle")}
        </button>
        <Badge tone="zinc">
          {idx + 1}/{queue.length}
        </Badge>
      </div>
      <ProgressBar value={idx / queue.length} />
      <Flashcard key={id} word={word} onGrade={grade} />
    </div>
  );
}

export default function TrainerPage() {
  return (
    <Hydrated fallback={<div className="text-zinc-400">…</div>}>
      <Trainer />
    </Hydrated>
  );
}
