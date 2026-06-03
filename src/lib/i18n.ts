"use client";

import type { Locale, LocalizedText } from "./types";
import { useStore } from "./store";

/** Resolve localized text, falling back uk → ru → en when a language is absent. */
export function pick(text: LocalizedText, locale: Locale): string {
  return text[locale] ?? text.ru ?? text.en;
}

/** @deprecated use `pick` */
export const loc = pick;

/** UI string dictionary (chrome, buttons, labels — not learning content). */
const UI = {
  appName: { ru: "Deutsch Tutor", en: "Deutsch Tutor", uk: "Deutsch Tutor" },
  tagline: {
    ru: "Немецкий с нуля до B1/B2 — быстро и по делу",
    en: "German from zero to B1/B2 — fast and focused",
    uk: "Німецька з нуля до B1/B2 — швидко й по суті",
  },
  nav_home: { ru: "Главная", en: "Home", uk: "Головна" },
  nav_learn: { ru: "Курс", en: "Learn", uk: "Курс" },
  nav_grammar: { ru: "Грамматика", en: "Grammar", uk: "Граматика" },
  nav_vocab: { ru: "Слова", en: "Vocabulary", uk: "Слова" },
  nav_practice: { ru: "Практика", en: "Practice", uk: "Практика" },
  nav_trainer: { ru: "Тренажёр", en: "Trainer", uk: "Тренажер" },
  nav_settings: { ru: "Настройки", en: "Settings", uk: "Налаштування" },

  trainerTitle: { ru: "Тренажёр словаря", en: "Vocabulary trainer", uk: "Тренажер словника" },
  trainerIntro: {
    ru: "Тренируйте полный список слов A1 по темам. Карточки попадают в систему повторений.",
    en: "Drill the full A1 wordlist by category. Cards enter your review schedule.",
    uk: "Тренуйте повний список слів A1 за темами. Картки потрапляють до системи повторень.",
  },
  allCategories: { ru: "Все слова", en: "All words", uk: "Усі слова" },
  trainStart: { ru: "Тренировать", en: "Train", uk: "Тренувати" },
  wordsUnit: { ru: "слов", en: "words", uk: "слів" },

  continue: { ru: "Продолжить", en: "Continue", uk: "Продовжити" },
  start: { ru: "Начать", en: "Start", uk: "Почати" },
  check: { ru: "Проверить", en: "Check", uk: "Перевірити" },
  next: { ru: "Дальше", en: "Next", uk: "Далі" },
  finish: { ru: "Завершить", en: "Finish", uk: "Завершити" },
  correct: { ru: "Верно!", en: "Correct!", uk: "Правильно!" },
  incorrect: { ru: "Неверно", en: "Incorrect", uk: "Неправильно" },
  showAnswer: { ru: "Показать ответ", en: "Show answer", uk: "Показати відповідь" },
  yourAnswer: { ru: "Ваш ответ", en: "Your answer", uk: "Ваша відповідь" },

  streak: { ru: "Серия дней", en: "Day streak", uk: "Серія днів" },
  dueReviews: { ru: "К повторению", en: "Due reviews", uk: "До повторення" },
  lessonsDone: { ru: "Уроков пройдено", en: "Lessons done", uk: "Уроків пройдено" },
  wordsLearned: { ru: "Слов изучено", en: "Words learned", uk: "Слів вивчено" },

  grade_again: { ru: "Снова", en: "Again", uk: "Знову" },
  grade_hard: { ru: "Трудно", en: "Hard", uk: "Важко" },
  grade_good: { ru: "Хорошо", en: "Good", uk: "Добре" },
  grade_easy: { ru: "Легко", en: "Easy", uk: "Легко" },

  nativeLanguage: { ru: "Язык объяснений", en: "Explanation language", uk: "Мова пояснень" },
  russian: { ru: "Русский", en: "Russian", uk: "Російська" },
  english: { ru: "Английский", en: "English", uk: "Англійська" },
  ukrainian: { ru: "Украинский", en: "Ukrainian", uk: "Українська" },
  resetProgress: { ru: "Сбросить прогресс", en: "Reset progress", uk: "Скинути прогрес" },
  resetConfirm: {
    ru: "Удалить весь прогресс? Это необратимо.",
    en: "Delete all progress? This cannot be undone.",
    uk: "Видалити весь прогрес? Це незворотно.",
  },

  noReviews: {
    ru: "Нет карточек к повторению. Пройдите урок, чтобы добавить слова.",
    en: "Nothing due. Complete a lesson to add cards.",
    uk: "Немає карток для повторення. Пройдіть урок, щоб додати слова.",
  },
  sessionDone: { ru: "Сессия завершена!", en: "Session complete!", uk: "Сесію завершено!" },
  examples: { ru: "Примеры", en: "Examples", uk: "Приклади" },
  forms: { ru: "Формы", en: "Forms", uk: "Форми" },
  plural: { ru: "Мн. число", en: "Plural", uk: "Множина" },
  comparative: { ru: "Сравнит.", en: "Comparative", uk: "Вищий ст." },
  superlative: { ru: "Превосх.", en: "Superlative", uk: "Найвищий ст." },
  pickArticle: { ru: "Выберите артикль", en: "Pick the article", uk: "Виберіть артикль" },
  matchPairs: { ru: "Сопоставьте пары", en: "Match the pairs", uk: "З'єднайте пари" },
} satisfies Record<string, LocalizedText>;

export type UIKey = keyof typeof UI;

/** Hook: returns the active locale and a translator for UI + content. */
export function useI18n() {
  const locale = useStore((s) => s.nativeLanguage);
  return {
    locale,
    /** Translate a UI key. */
    t: (key: UIKey) => pick(UI[key], locale),
    /** Resolve a localized content string. */
    tc: (text: LocalizedText) => pick(text, locale),
  };
}
