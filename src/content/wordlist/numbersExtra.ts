import type { Word } from "@/lib/types";
import { w } from "./build";

const T = "numbers";
const num = (lemma: string, ru: string, en: string, uk: string) => w("numeral", lemma, ru, en, T, uk);

export const numbersExtra: Word[] = [
  num("dreizehn", "тринадцать", "thirteen", "тринадцять"),
  num("vierzehn", "четырнадцать", "fourteen", "чотирнадцять"),
  num("fünfzehn", "пятнадцать", "fifteen", "п'ятнадцять"),
  num("sechzehn", "шестнадцать", "sixteen", "шістнадцять"),
  num("siebzehn", "семнадцать", "seventeen", "сімнадцять"),
  num("achtzehn", "восемнадцать", "eighteen", "вісімнадцять"),
  num("neunzehn", "девятнадцать", "nineteen", "дев'ятнадцять"),
  num("dreißig", "тридцать", "thirty", "тридцять"),
  num("vierzig", "сорок", "forty", "сорок"),
  num("fünfzig", "пятьдесят", "fifty", "п'ятдесят"),
  num("sechzig", "шестьдесят", "sixty", "шістдесят"),
  num("siebzig", "семьдесят", "seventy", "сімдесят"),
  num("achtzig", "восемьдесят", "eighty", "вісімдесят"),
  num("neunzig", "девяносто", "ninety", "дев'яносто"),
  num("tausend", "тысяча", "thousand", "тисяча"),
];
