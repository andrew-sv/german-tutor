import type { Word } from "@/lib/types";

export const adjectives: Word[] = [
  { id: "gut", level: "A1", theme: "adjectives", lemma: "gut", pos: "adjective", translation: { ru: "хороший, хорошо", en: "good / well" }, adjective: { comparative: "besser", superlative: "am besten" }, note: { ru: "Сравнение неправильное: gut – besser – am besten.", en: "Irregular comparison: gut – besser – am besten." }, examples: [{ de: "Das Essen ist gut.", translation: { ru: "Еда хорошая.", en: "The food is good." } }] },
  { id: "gross", level: "A1", theme: "adjectives", lemma: "groß", pos: "adjective", translation: { ru: "большой, высокий", en: "big / tall" }, adjective: { comparative: "größer", superlative: "am größten" }, examples: [{ de: "Berlin ist eine große Stadt.", translation: { ru: "Берлин — большой город.", en: "Berlin is a big city." } }] },
  { id: "klein", level: "A1", theme: "adjectives", lemma: "klein", pos: "adjective", translation: { ru: "маленький", en: "small" }, adjective: { comparative: "kleiner", superlative: "am kleinsten" }, examples: [{ de: "Das Kind ist noch klein.", translation: { ru: "Ребёнок ещё маленький.", en: "The child is still small." } }] },
  { id: "neu", level: "A1", theme: "adjectives", lemma: "neu", pos: "adjective", translation: { ru: "новый", en: "new" }, adjective: { comparative: "neuer", superlative: "am neuesten" }, examples: [] },
  { id: "alt", level: "A1", theme: "adjectives", lemma: "alt", pos: "adjective", translation: { ru: "старый", en: "old" }, adjective: { comparative: "älter", superlative: "am ältesten" }, examples: [] },
  { id: "schoen", level: "A1", theme: "adjectives", lemma: "schön", pos: "adjective", translation: { ru: "красивый; прекрасно", en: "beautiful / nice" }, adjective: { comparative: "schöner", superlative: "am schönsten" }, examples: [] },
];
