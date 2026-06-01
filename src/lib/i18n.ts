"use client";

import type { Locale, LocalizedText } from "./types";
import { useStore } from "./store";

/** Resolve a bilingual content string to the chosen native language. */
export function loc(text: LocalizedText, locale: Locale): string {
  return text[locale];
}

/** UI string dictionary (chrome, buttons, labels — not learning content). */
const UI = {
  appName: { ru: "Deutsch Tutor", en: "Deutsch Tutor" },
  tagline: {
    ru: "Немецкий с нуля до B1/B2 — быстро и по делу",
    en: "German from zero to B1/B2 — fast and focused",
  },
  nav_home: { ru: "Главная", en: "Home" },
  nav_learn: { ru: "Курс", en: "Learn" },
  nav_grammar: { ru: "Грамматика", en: "Grammar" },
  nav_vocab: { ru: "Слова", en: "Vocabulary" },
  nav_practice: { ru: "Практика", en: "Practice" },
  nav_trainer: { ru: "Тренажёр", en: "Trainer" },
  nav_settings: { ru: "Настройки", en: "Settings" },

  trainerTitle: { ru: "Тренажёр словаря", en: "Vocabulary trainer" },
  trainerIntro: {
    ru: "Тренируйте полный список слов A1 по темам. Карточки попадают в систему повторений.",
    en: "Drill the full A1 wordlist by category. Cards enter your review schedule.",
  },
  allCategories: { ru: "Все слова", en: "All words" },
  trainStart: { ru: "Тренировать", en: "Train" },
  wordsUnit: { ru: "слов", en: "words" },

  continue: { ru: "Продолжить", en: "Continue" },
  start: { ru: "Начать", en: "Start" },
  check: { ru: "Проверить", en: "Check" },
  next: { ru: "Дальше", en: "Next" },
  finish: { ru: "Завершить", en: "Finish" },
  correct: { ru: "Верно!", en: "Correct!" },
  incorrect: { ru: "Неверно", en: "Incorrect" },
  showAnswer: { ru: "Показать ответ", en: "Show answer" },
  yourAnswer: { ru: "Ваш ответ", en: "Your answer" },

  streak: { ru: "Серия дней", en: "Day streak" },
  dueReviews: { ru: "К повторению", en: "Due reviews" },
  lessonsDone: { ru: "Уроков пройдено", en: "Lessons done" },
  wordsLearned: { ru: "Слов изучено", en: "Words learned" },

  grade_again: { ru: "Снова", en: "Again" },
  grade_hard: { ru: "Трудно", en: "Hard" },
  grade_good: { ru: "Хорошо", en: "Good" },
  grade_easy: { ru: "Легко", en: "Easy" },

  nativeLanguage: { ru: "Язык объяснений", en: "Explanation language" },
  russian: { ru: "Русский", en: "Russian" },
  english: { ru: "Английский", en: "English" },
  resetProgress: { ru: "Сбросить прогресс", en: "Reset progress" },
  resetConfirm: {
    ru: "Удалить весь прогресс? Это необратимо.",
    en: "Delete all progress? This cannot be undone.",
  },

  noReviews: {
    ru: "Нет карточек к повторению. Пройдите урок, чтобы добавить слова.",
    en: "Nothing due. Complete a lesson to add cards.",
  },
  sessionDone: { ru: "Сессия завершена!", en: "Session complete!" },
  examples: { ru: "Примеры", en: "Examples" },
  forms: { ru: "Формы", en: "Forms" },
  plural: { ru: "Мн. число", en: "Plural" },
  comparative: { ru: "Сравнит.", en: "Comparative" },
  superlative: { ru: "Превосх.", en: "Superlative" },
  pickArticle: { ru: "Выберите артикль", en: "Pick the article" },
  matchPairs: { ru: "Сопоставьте пары", en: "Match the pairs" },
} satisfies Record<string, LocalizedText>;

export type UIKey = keyof typeof UI;

/** Hook: returns the active locale and a translator for UI + content. */
export function useI18n() {
  const locale = useStore((s) => s.nativeLanguage);
  return {
    locale,
    /** Translate a UI key. */
    t: (key: UIKey) => UI[key][locale],
    /** Resolve a bilingual content string. */
    tc: (text: LocalizedText) => text[locale],
  };
}
