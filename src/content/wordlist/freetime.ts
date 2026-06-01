import type { Word } from "@/lib/types";
import { n, v } from "./build";

const T = "freetime";
export const freetime: Word[] = [
  n("f", "Freizeit", undefined, "свободное время", "free time", T),
  n("m", "Sport", undefined, "спорт", "sport", T),
  n("f", "Musik", undefined, "музыка", "music", T),
  n("m", "Film", "Filme", "фильм", "film", T),
  n("n", "Spiel", "Spiele", "игра", "game", T),
  n("n", "Hobby", "Hobbys", "хобби", "hobby", T),
  n("f", "Party", "Partys", "вечеринка", "party", T),
  v("spielen", "играть", "to play", T),
  v("schwimmen", "плавать", "to swim", T),
  v("tanzen", "танцевать", "to dance", T),
  v("singen", "петь", "to sing", T),
  v("reisen", "путешествовать", "to travel", T),
  v("kochen", "готовить", "to cook", T),
  v("lesen", "читать", "to read", T),
];
