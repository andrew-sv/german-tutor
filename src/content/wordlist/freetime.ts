import type { Word } from "@/lib/types";
import { n, v } from "./build";

const T = "freetime";
export const freetime: Word[] = [
  n("f", "Freizeit", undefined, "свободное время", "free time", T, "вільний час"),
  n("m", "Sport", undefined, "спорт", "sport", T, "спорт"),
  n("f", "Musik", undefined, "музыка", "music", T, "музика"),
  n("m", "Film", "Filme", "фильм", "film", T, "фільм"),
  n("n", "Spiel", "Spiele", "игра", "game", T, "гра"),
  n("n", "Hobby", "Hobbys", "хобби", "hobby", T, "хобі"),
  n("f", "Party", "Partys", "вечеринка", "party", T, "вечірка"),
  v("spielen", "играть", "to play", T, "грати"),
  v("schwimmen", "плавать", "to swim", T, "плавати"),
  v("tanzen", "танцевать", "to dance", T, "танцювати"),
  v("singen", "петь", "to sing", T, "співати"),
  v("reisen", "путешествовать", "to travel", T, "подорожувати"),
  v("kochen", "готовить", "to cook", T, "готувати"),
  v("lesen", "читать", "to read", T, "читати"),
];
