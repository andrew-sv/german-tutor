import type { Word } from "@/lib/types";
import { w } from "./build";

const T = "numbers";
const num = (lemma: string, ru: string, en: string) => w("numeral", lemma, ru, en, T);

export const numbersExtra: Word[] = [
  num("dreizehn", "тринадцать", "thirteen"),
  num("vierzehn", "четырнадцать", "fourteen"),
  num("fünfzehn", "пятнадцать", "fifteen"),
  num("sechzehn", "шестнадцать", "sixteen"),
  num("siebzehn", "семнадцать", "seventeen"),
  num("achtzehn", "восемнадцать", "eighteen"),
  num("neunzehn", "девятнадцать", "nineteen"),
  num("dreißig", "тридцать", "thirty"),
  num("vierzig", "сорок", "forty"),
  num("fünfzig", "пятьдесят", "fifty"),
  num("sechzig", "шестьдесят", "sixty"),
  num("siebzig", "семьдесят", "seventy"),
  num("achtzig", "восемьдесят", "eighty"),
  num("neunzig", "девяносто", "ninety"),
  num("tausend", "тысяча", "thousand"),
];
