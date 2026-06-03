import type { Word } from "@/lib/types";
import { n } from "./build";

const T = "body";
export const body: Word[] = [
  n("m", "Körper", "Körper", "тело", "body", T, "тіло"),
  n("m", "Kopf", "Köpfe", "голова", "head", T, "голова"),
  n("n", "Auge", "Augen", "глаз", "eye", T, "око"),
  n("n", "Ohr", "Ohren", "ухо", "ear", T, "вухо"),
  n("f", "Nase", "Nasen", "нос", "nose", T, "ніс"),
  n("m", "Mund", "Münder", "рот", "mouth", T, "рот"),
  n("m", "Zahn", "Zähne", "зуб", "tooth", T, "зуб"),
  n("n", "Haar", "Haare", "волос", "hair", T, "волосся"),
  n("f", "Hand", "Hände", "рука (кисть)", "hand", T, "рука (кисть)"),
  n("m", "Arm", "Arme", "рука", "arm", T, "рука"),
  n("n", "Bein", "Beine", "нога", "leg", T, "нога"),
  n("m", "Fuß", "Füße", "ступня", "foot", T, "ступня"),
  n("m", "Finger", "Finger", "палец", "finger", T, "палець"),
  n("m", "Bauch", "Bäuche", "живот", "belly", T, "живіт"),
  n("m", "Rücken", "Rücken", "спина", "back", T, "спина"),
  n("n", "Gesicht", "Gesichter", "лицо", "face", T, "обличчя"),
  n("n", "Herz", "Herzen", "сердце", "heart", T, "серце"),
];
