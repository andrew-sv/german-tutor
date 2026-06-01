import type { Word } from "@/lib/types";

export const food: Word[] = [
  { id: "apfel", level: "A1", theme: "food", lemma: "Apfel", pos: "noun", translation: { ru: "яблоко", en: "apple" }, noun: { gender: "m", plural: "Äpfel" }, examples: [{ de: "Der Apfel ist rot.", translation: { ru: "Яблоко красное.", en: "The apple is red." } }] },
  { id: "brot", level: "A1", theme: "food", lemma: "Brot", pos: "noun", translation: { ru: "хлеб", en: "bread" }, noun: { gender: "n", plural: "Brote" }, examples: [{ de: "Ich esse Brot zum Frühstück.", translation: { ru: "Я ем хлеб на завтрак.", en: "I eat bread for breakfast." } }] },
  { id: "wasser", level: "A1", theme: "food", lemma: "Wasser", pos: "noun", translation: { ru: "вода", en: "water" }, noun: { gender: "n" }, examples: [{ de: "Ich trinke gern Wasser.", translation: { ru: "Я люблю пить воду.", en: "I like drinking water." } }] },
  { id: "kaffee", level: "A1", theme: "food", lemma: "Kaffee", pos: "noun", translation: { ru: "кофе", en: "coffee" }, noun: { gender: "m", plural: "Kaffees" }, examples: [{ de: "Möchtest du einen Kaffee?", translation: { ru: "Хочешь кофе?", en: "Would you like a coffee?" } }] },
  { id: "tee", level: "A1", theme: "food", lemma: "Tee", pos: "noun", translation: { ru: "чай", en: "tea" }, noun: { gender: "m", plural: "Tees" }, examples: [] },
  { id: "milch", level: "A1", theme: "food", lemma: "Milch", pos: "noun", translation: { ru: "молоко", en: "milk" }, noun: { gender: "f" }, examples: [] },
  { id: "ei", level: "A1", theme: "food", lemma: "Ei", pos: "noun", translation: { ru: "яйцо", en: "egg" }, noun: { gender: "n", plural: "Eier" }, examples: [] },
  { id: "kaese", level: "A1", theme: "food", lemma: "Käse", pos: "noun", translation: { ru: "сыр", en: "cheese" }, noun: { gender: "m" }, examples: [] },
  { id: "obst", level: "A1", theme: "food", lemma: "Obst", pos: "noun", translation: { ru: "фрукты", en: "fruit" }, noun: { gender: "n" }, examples: [{ de: "Obst ist gesund.", translation: { ru: "Фрукты полезны.", en: "Fruit is healthy." } }] },
  { id: "fleisch", level: "A1", theme: "food", lemma: "Fleisch", pos: "noun", translation: { ru: "мясо", en: "meat" }, noun: { gender: "n" }, examples: [] },
];
