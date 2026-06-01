import type { Word } from "@/lib/types";
import { body } from "./body";
import { clothing } from "./clothing";
import { weather } from "./weather";
import { places } from "./places";
import { transport } from "./transport";
import { work } from "./work";
import { shopping } from "./shopping";
import { freetime } from "./freetime";
import { foodExtra } from "./foodExtra";
import { verbsExtra } from "./verbsExtra";
import { numbersExtra } from "./numbersExtra";
import { functionWords } from "./functionWords";
import { wordgroups } from "./wordgroups";
import { imported } from "./imported";

/**
 * The extended Goethe A1 wordlist (lighter entries, drilled in the trainer).
 * `imported` (the authoritative Goethe Wortliste) comes first so its genders /
 * plurals win over any hand-authored guess on lemma de-dup. Core words in
 * src/content/vocabulary always win over both (see content/index.ts).
 */
export const extendedWords: Word[] = [
  ...imported,
  ...wordgroups,
  ...body,
  ...clothing,
  ...weather,
  ...places,
  ...transport,
  ...work,
  ...shopping,
  ...freetime,
  ...foodExtra,
  ...verbsExtra,
  ...numbersExtra,
  ...functionWords,
];
