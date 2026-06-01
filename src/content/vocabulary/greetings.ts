import type { Word } from "@/lib/types";

export const greetings: Word[] = [
  { id: "hallo", level: "A1", theme: "greetings", lemma: "hallo", pos: "phrase", translation: { ru: "привет", en: "hello" }, examples: [{ de: "Hallo, wie geht's?", translation: { ru: "Привет, как дела?", en: "Hi, how are you?" } }] },
  { id: "tschuss", level: "A1", theme: "greetings", lemma: "tschüss", pos: "phrase", translation: { ru: "пока", en: "bye" }, examples: [{ de: "Tschüss, bis morgen!", translation: { ru: "Пока, до завтра!", en: "Bye, see you tomorrow!" } }] },
  { id: "guten-tag", level: "A1", theme: "greetings", lemma: "guten Tag", pos: "phrase", translation: { ru: "добрый день", en: "good day / hello" }, examples: [{ de: "Guten Tag, Frau Müller.", translation: { ru: "Добрый день, госпожа Мюллер.", en: "Good day, Mrs Müller." } }] },
  { id: "danke", level: "A1", theme: "greetings", lemma: "danke", pos: "phrase", translation: { ru: "спасибо", en: "thank you" }, examples: [{ de: "Danke schön!", translation: { ru: "Большое спасибо!", en: "Thank you very much!" } }] },
  { id: "bitte", level: "A1", theme: "greetings", lemma: "bitte", pos: "phrase", translation: { ru: "пожалуйста; не за что", en: "please; you're welcome" }, examples: [{ de: "Ein Kaffee, bitte.", translation: { ru: "Один кофе, пожалуйста.", en: "A coffee, please." } }] },
  { id: "ja", level: "A1", theme: "greetings", lemma: "ja", pos: "phrase", translation: { ru: "да", en: "yes" }, examples: [] },
  { id: "nein", level: "A1", theme: "greetings", lemma: "nein", pos: "phrase", translation: { ru: "нет", en: "no" }, examples: [] },
  { id: "entschuldigung", level: "A1", theme: "greetings", lemma: "Entschuldigung", pos: "phrase", translation: { ru: "извините; простите", en: "excuse me; sorry" }, examples: [{ de: "Entschuldigung, wo ist der Bahnhof?", translation: { ru: "Извините, где вокзал?", en: "Excuse me, where is the station?" } }] },
  { id: "name", level: "A1", theme: "greetings", lemma: "Name", pos: "noun", translation: { ru: "имя", en: "name" }, noun: { gender: "m", plural: "Namen", genitiveSingular: "Namens" }, examples: [{ de: "Mein Name ist Anna.", translation: { ru: "Меня зовут Анна.", en: "My name is Anna." } }] },
];
