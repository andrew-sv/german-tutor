import type { Category } from "@/lib/types";

/**
 * Display metadata for every vocabulary category — both course themes and
 * trainer-only categories. The `id` matches a Word's `theme` field.
 */
export const categories: Category[] = [
  { id: "greetings", level: "A1", icon: "👋", title: { ru: "Приветствия", en: "Greetings" } },
  { id: "family", level: "A1", icon: "👨‍👩‍👧", title: { ru: "Семья", en: "Family" } },
  { id: "numbers", level: "A1", icon: "🔢", title: { ru: "Числа", en: "Numbers" } },
  { id: "verbs", level: "A1", icon: "⚡", title: { ru: "Глаголы", en: "Verbs" } },
  { id: "food", level: "A1", icon: "🍎", title: { ru: "Еда и напитки", en: "Food & drink" } },
  { id: "home", level: "A1", icon: "🏠", title: { ru: "Дом и вещи", en: "Home & things" } },
  { id: "colors", level: "A1", icon: "🎨", title: { ru: "Цвета", en: "Colors" } },
  { id: "adjectives", level: "A1", icon: "🔤", title: { ru: "Прилагательные", en: "Adjectives" } },
  { id: "time", level: "A1", icon: "🕐", title: { ru: "Время и дни", en: "Time & days" } },
  // Trainer-only (extended) categories
  { id: "body", level: "A1", icon: "🧍", title: { ru: "Тело", en: "Body" } },
  { id: "clothing", level: "A1", icon: "👕", title: { ru: "Одежда", en: "Clothing" } },
  { id: "weather", level: "A1", icon: "🌤️", title: { ru: "Погода", en: "Weather" } },
  { id: "places", level: "A1", icon: "🏙️", title: { ru: "Город и места", en: "City & places" } },
  { id: "transport", level: "A1", icon: "🚆", title: { ru: "Транспорт", en: "Transport" } },
  { id: "work", level: "A1", icon: "💼", title: { ru: "Работа и профессии", en: "Work & jobs" } },
  { id: "shopping", level: "A1", icon: "🛒", title: { ru: "Покупки", en: "Shopping" } },
  { id: "freetime", level: "A1", icon: "🎮", title: { ru: "Свободное время", en: "Free time" } },
  { id: "communication", level: "A1", icon: "📞", title: { ru: "Общение и связь", en: "Communication" } },
  { id: "education", level: "A1", icon: "📚", title: { ru: "Учёба и язык", en: "Education & language" } },
  { id: "abstract", level: "A1", icon: "💭", title: { ru: "Абстрактные понятия", en: "Abstract / general" } },
  { id: "units", level: "A1", icon: "📏", title: { ru: "Меры и единицы", en: "Units & measures" } },
  { id: "countries", level: "A1", icon: "🌍", title: { ru: "Страны и национальности", en: "Countries" } },
  { id: "prepositions", level: "A1", icon: "🧭", title: { ru: "Предлоги", en: "Prepositions" } },
  { id: "adverbs", level: "A1", icon: "🔁", title: { ru: "Наречия", en: "Adverbs" } },
  { id: "function", level: "A1", icon: "🔗", title: { ru: "Местоимения и союзы", en: "Pronouns & conjunctions" } },
];

export const getCategory = (id: string): Category | undefined => categories.find((c) => c.id === id);

/** Categories that actually contain at least one word, in defined order. */
export function usedCategories(words: { theme?: string }[]): Category[] {
  const present = new Set(words.map((w) => w.theme).filter(Boolean));
  return categories.filter((c) => present.has(c.id));
}
