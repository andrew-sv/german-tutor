import type { Word } from "@/lib/types";
import { w } from "./build";

const T = "function";
export const functionWords: Word[] = [
  // Question words
  w("pronoun", "wer", "кто", "who", T),
  w("pronoun", "was", "что", "what", T),
  w("adverb", "wo", "где", "where", T),
  w("adverb", "wohin", "куда", "where to", T),
  w("adverb", "woher", "откуда", "where from", T),
  w("adverb", "wann", "когда", "when", T),
  w("adverb", "wie", "как", "how", T),
  w("adverb", "warum", "почему", "why", T),
  // Conjunctions
  w("conjunction", "und", "и", "and", T),
  w("conjunction", "oder", "или", "or", T),
  w("conjunction", "aber", "но", "but", T),
  w("conjunction", "denn", "потому что", "because / for", T),
  w("conjunction", "weil", "потому что", "because", T),
  w("conjunction", "dass", "что", "that", T),
  w("conjunction", "wenn", "если, когда", "if / when", T),
  // Adverbs of time/frequency/degree
  w("adverb", "heute", "сегодня", "today", T),
  w("adverb", "gestern", "вчера", "yesterday", T),
  w("adverb", "morgen", "завтра", "tomorrow", T),
  w("adverb", "jetzt", "сейчас", "now", T),
  w("adverb", "hier", "здесь", "here", T),
  w("adverb", "dort", "там", "there", T),
  w("adverb", "immer", "всегда", "always", T),
  w("adverb", "oft", "часто", "often", T),
  w("adverb", "manchmal", "иногда", "sometimes", "adverbs"),
  w("adverb", "nie", "никогда", "never", T),
  w("adverb", "gern", "охотно, с удовольствием", "gladly / like to", T),
  w("adverb", "auch", "тоже", "also", T),
  w("adverb", "nur", "только", "only", T),
  w("adverb", "sehr", "очень", "very", T),
  // Prepositions
  w("preposition", "in", "в", "in", T),
  w("preposition", "auf", "на", "on", T),
  w("preposition", "mit", "с", "with", T),
  w("preposition", "für", "для", "for", T),
  w("preposition", "ohne", "без", "without", T),
  w("preposition", "von", "от, из", "from / of", T),
  w("preposition", "zu", "к", "to", T),
  w("preposition", "nach", "после, в", "after / to", T),
  w("preposition", "bei", "у, при", "at / near", T),
  w("preposition", "aus", "из", "out of / from", T),
];
