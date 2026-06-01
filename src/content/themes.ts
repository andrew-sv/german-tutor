import type { VocabTheme } from "@/lib/types";

/**
 * A1 thematic vocabulary units, in curriculum order.
 * `order` is interleaved with the grammar lessons (which use even slots).
 * Add a theme here + a matching word file in ./vocabulary to grow the course.
 */
export const themes: VocabTheme[] = [
  { id: "greetings", level: "A1", order: 1, icon: "👋", title: { ru: "Приветствия и вежливость", en: "Greetings & politeness" } },
  { id: "family", level: "A1", order: 3, icon: "👨‍👩‍👧", title: { ru: "Семья", en: "Family" }, grammarTopicId: "a1-articles" },
  { id: "numbers", level: "A1", order: 4, icon: "🔢", title: { ru: "Числа", en: "Numbers" } },
  { id: "verbs", level: "A1", order: 6, icon: "⚡", title: { ru: "Важные глаголы", en: "Key verbs" }, grammarTopicId: "a1-present-regular" },
  { id: "food", level: "A1", order: 7, icon: "🍎", title: { ru: "Еда и напитки", en: "Food & drink" } },
  { id: "home", level: "A1", order: 9, icon: "🏠", title: { ru: "Дом и вещи", en: "Home & things" } },
  { id: "colors", level: "A1", order: 10, icon: "🎨", title: { ru: "Цвета", en: "Colors" } },
  { id: "adjectives", level: "A1", order: 11, icon: "🔤", title: { ru: "Прилагательные", en: "Adjectives" } },
  { id: "time", level: "A1", order: 12, icon: "🕐", title: { ru: "Время и дни", en: "Time & days" } },
];

export const getTheme = (id: string): VocabTheme | undefined => themes.find((t) => t.id === id);
