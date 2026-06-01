import type { Word } from "@/lib/types";
import { n } from "./build";

const T = "body";
export const body: Word[] = [
  n("m", "Körper", "Körper", "тело", "body", T),
  n("m", "Kopf", "Köpfe", "голова", "head", T),
  n("n", "Auge", "Augen", "глаз", "eye", T),
  n("n", "Ohr", "Ohren", "ухо", "ear", T),
  n("f", "Nase", "Nasen", "нос", "nose", T),
  n("m", "Mund", "Münder", "рот", "mouth", T),
  n("m", "Zahn", "Zähne", "зуб", "tooth", T),
  n("n", "Haar", "Haare", "волос", "hair", T),
  n("f", "Hand", "Hände", "рука (кисть)", "hand", T),
  n("m", "Arm", "Arme", "рука", "arm", T),
  n("n", "Bein", "Beine", "нога", "leg", T),
  n("m", "Fuß", "Füße", "ступня", "foot", T),
  n("m", "Finger", "Finger", "палец", "finger", T),
  n("m", "Bauch", "Bäuche", "живот", "belly", T),
  n("m", "Rücken", "Rücken", "спина", "back", T),
  n("n", "Gesicht", "Gesichter", "лицо", "face", T),
  n("n", "Herz", "Herzen", "сердце", "heart", T),
];
