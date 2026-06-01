import type { Word } from "@/lib/types";

export const family: Word[] = [
  { id: "familie", level: "A1", theme: "family", lemma: "Familie", pos: "noun", translation: { ru: "семья", en: "family" }, noun: { gender: "f", plural: "Familien" }, examples: [{ de: "Meine Familie ist groß.", translation: { ru: "Моя семья большая.", en: "My family is big." } }] },
  { id: "vater", level: "A1", theme: "family", lemma: "Vater", pos: "noun", translation: { ru: "отец", en: "father" }, noun: { gender: "m", plural: "Väter" }, examples: [{ de: "Mein Vater arbeitet viel.", translation: { ru: "Мой отец много работает.", en: "My father works a lot." } }] },
  { id: "mutter", level: "A1", theme: "family", lemma: "Mutter", pos: "noun", translation: { ru: "мать", en: "mother" }, noun: { gender: "f", plural: "Mütter" }, examples: [{ de: "Die Mutter kocht das Essen.", translation: { ru: "Мама готовит еду.", en: "The mother cooks the food." } }] },
  { id: "bruder", level: "A1", theme: "family", lemma: "Bruder", pos: "noun", translation: { ru: "брат", en: "brother" }, noun: { gender: "m", plural: "Brüder" }, examples: [] },
  { id: "schwester", level: "A1", theme: "family", lemma: "Schwester", pos: "noun", translation: { ru: "сестра", en: "sister" }, noun: { gender: "f", plural: "Schwestern" }, examples: [] },
  { id: "sohn", level: "A1", theme: "family", lemma: "Sohn", pos: "noun", translation: { ru: "сын", en: "son" }, noun: { gender: "m", plural: "Söhne" }, examples: [] },
  { id: "tochter", level: "A1", theme: "family", lemma: "Tochter", pos: "noun", translation: { ru: "дочь", en: "daughter" }, noun: { gender: "f", plural: "Töchter" }, examples: [] },
  { id: "mann", level: "A1", theme: "family", lemma: "Mann", pos: "noun", translation: { ru: "мужчина; муж", en: "man; husband" }, noun: { gender: "m", plural: "Männer" }, examples: [{ de: "Der Mann arbeitet hier.", translation: { ru: "Этот мужчина работает здесь.", en: "The man works here." } }] },
  { id: "frau", level: "A1", theme: "family", lemma: "Frau", pos: "noun", translation: { ru: "женщина; жена", en: "woman; wife" }, noun: { gender: "f", plural: "Frauen" }, examples: [{ de: "Die Frau spricht Deutsch.", translation: { ru: "Женщина говорит по-немецки.", en: "The woman speaks German." } }] },
  { id: "kind", level: "A1", theme: "family", lemma: "Kind", pos: "noun", translation: { ru: "ребёнок", en: "child" }, noun: { gender: "n", plural: "Kinder" }, examples: [{ de: "Das Kind spielt im Garten.", translation: { ru: "Ребёнок играет в саду.", en: "The child plays in the garden." } }] },
];
