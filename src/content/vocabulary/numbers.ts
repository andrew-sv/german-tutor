import type { Word } from "@/lib/types";

const n = (id: string, lemma: string, ru: string, en: string, uk: string): Word => ({
  id,
  level: "A1",
  theme: "numbers",
  lemma,
  pos: "numeral",
  translation: { ru, en, uk },
  examples: [],
});

export const numbers: Word[] = [
  n("null", "null", "ноль", "zero", "нуль"),
  n("eins", "eins", "один", "one", "один"),
  n("zwei", "zwei", "два", "two", "два"),
  n("drei", "drei", "три", "three", "три"),
  n("vier", "vier", "четыре", "four", "чотири"),
  n("fuenf", "fünf", "пять", "five", "п'ять"),
  n("sechs", "sechs", "шесть", "six", "шість"),
  n("sieben", "sieben", "семь", "seven", "сім"),
  n("acht", "acht", "восемь", "eight", "вісім"),
  n("neun", "neun", "девять", "nine", "дев'ять"),
  n("zehn", "zehn", "десять", "ten", "десять"),
  n("elf", "elf", "одиннадцать", "eleven", "одинадцять"),
  n("zwoelf", "zwölf", "двенадцать", "twelve", "дванадцять"),
  n("zwanzig", "zwanzig", "двадцать", "twenty", "двадцять"),
  n("hundert", "hundert", "сто", "hundred", "сто"),
];

// Override one with an example for context.
numbers[3] = { ...numbers[3], examples: [{ de: "Ich habe drei Bücher.", translation: { ru: "У меня три книги.", en: "I have three books.", uk: "У мене три книги." } }] };
