import type { Word } from "@/lib/types";

const n = (id: string, lemma: string, ru: string, en: string): Word => ({
  id,
  level: "A1",
  theme: "numbers",
  lemma,
  pos: "numeral",
  translation: { ru, en },
  examples: [],
});

export const numbers: Word[] = [
  n("null", "null", "ноль", "zero"),
  n("eins", "eins", "один", "one"),
  n("zwei", "zwei", "два", "two"),
  n("drei", "drei", "три", "three"),
  n("vier", "vier", "четыре", "four"),
  n("fuenf", "fünf", "пять", "five"),
  n("sechs", "sechs", "шесть", "six"),
  n("sieben", "sieben", "семь", "seven"),
  n("acht", "acht", "восемь", "eight"),
  n("neun", "neun", "девять", "nine"),
  n("zehn", "zehn", "десять", "ten"),
  n("elf", "elf", "одиннадцать", "eleven"),
  n("zwoelf", "zwölf", "двенадцать", "twelve"),
  n("zwanzig", "zwanzig", "двадцать", "twenty"),
  n("hundert", "hundert", "сто", "hundred"),
];

// Override one with an example for context.
numbers[3] = { ...numbers[3], examples: [{ de: "Ich habe drei Bücher.", translation: { ru: "У меня три книги.", en: "I have three books." } }] };
