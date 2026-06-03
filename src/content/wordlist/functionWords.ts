import type { Word } from "@/lib/types";
import { w } from "./build";

const T = "function";
export const functionWords: Word[] = [
  // Question words
  w("pronoun", "wer", "кто", "who", T, "хто"),
  w("pronoun", "was", "что", "what", T, "що"),
  w("adverb", "wo", "где", "where", T, "де"),
  w("adverb", "wohin", "куда", "where to", T, "куди"),
  w("adverb", "woher", "откуда", "where from", T, "звідки"),
  w("adverb", "wann", "когда", "when", T, "коли"),
  w("adverb", "wie", "как", "how", T, "як"),
  w("adverb", "warum", "почему", "why", T, "чому"),
  // Conjunctions
  w("conjunction", "und", "и", "and", T, "і"),
  w("conjunction", "oder", "или", "or", T, "або"),
  w("conjunction", "aber", "но", "but", T, "але"),
  w("conjunction", "denn", "потому что", "because / for", T, "тому що"),
  w("conjunction", "weil", "потому что", "because", T, "тому що"),
  w("conjunction", "dass", "что", "that", T, "що"),
  w("conjunction", "wenn", "если, когда", "if / when", T, "якщо, коли"),
  // Adverbs of time/frequency/degree
  w("adverb", "heute", "сегодня", "today", T, "сьогодні"),
  w("adverb", "gestern", "вчера", "yesterday", T, "вчора"),
  w("adverb", "morgen", "завтра", "tomorrow", T, "завтра"),
  w("adverb", "jetzt", "сейчас", "now", T, "зараз"),
  w("adverb", "hier", "здесь", "here", T, "тут"),
  w("adverb", "dort", "там", "there", T, "там"),
  w("adverb", "immer", "всегда", "always", T, "завжди"),
  w("adverb", "oft", "часто", "often", T, "часто"),
  w("adverb", "manchmal", "иногда", "sometimes", "adverbs", "іноді"),
  w("adverb", "nie", "никогда", "never", T, "ніколи"),
  w("adverb", "gern", "охотно, с удовольствием", "gladly / like to", T, "охоче"),
  w("adverb", "auch", "тоже", "also", T, "також"),
  w("adverb", "nur", "только", "only", T, "тільки"),
  w("adverb", "sehr", "очень", "very", T, "дуже"),
  // Prepositions
  w("preposition", "in", "в", "in", T, "у, в"),
  w("preposition", "auf", "на", "on", T, "на"),
  w("preposition", "mit", "с", "with", T, "з"),
  w("preposition", "für", "для", "for", T, "для"),
  w("preposition", "ohne", "без", "without", T, "без"),
  w("preposition", "von", "от, из", "from / of", T, "від, з"),
  w("preposition", "zu", "к", "to", T, "до"),
  w("preposition", "nach", "после, в", "after / to", T, "після, до"),
  w("preposition", "bei", "у, при", "at / near", T, "у, при"),
  w("preposition", "aus", "из", "out of / from", T, "з"),
];
