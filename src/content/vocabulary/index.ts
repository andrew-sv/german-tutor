import type { Word } from "@/lib/types";
import { greetings } from "./greetings";
import { numbers } from "./numbers";
import { family } from "./family";
import { food } from "./food";
import { home } from "./home";
import { colors } from "./colors";
import { adjectives } from "./adjectives";
import { time } from "./time";
import { verbs } from "./verbs";

/** All A1 vocabulary, aggregated from the themed word files. */
export const words: Word[] = [
  ...greetings,
  ...family,
  ...numbers,
  ...verbs,
  ...food,
  ...home,
  ...colors,
  ...adjectives,
  ...time,
];

/** Words belonging to a given theme, in authored order. */
export const wordsByTheme = (themeId: string): Word[] => words.filter((w) => w.theme === themeId);
