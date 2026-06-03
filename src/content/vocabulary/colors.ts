import type { Word } from "@/lib/types";

const c = (id: string, lemma: string, ru: string, en: string, uk: string): Word => ({
  id,
  level: "A1",
  theme: "colors",
  lemma,
  pos: "adjective",
  translation: { ru, en, uk },
  examples: [],
});

export const colors: Word[] = [
  { ...c("rot", "rot", "красный", "red", "червоний"), examples: [{ de: "Der Apfel ist rot.", translation: { ru: "Яблоко красное.", en: "The apple is red.", uk: "Яблуко червоне." } }] },
  c("blau", "blau", "синий, голубой", "blue", "синій, блакитний"),
  c("gruen", "grün", "зелёный", "green", "зелений"),
  c("gelb", "gelb", "жёлтый", "yellow", "жовтий"),
  c("schwarz", "schwarz", "чёрный", "black", "чорний"),
  c("weiss", "weiß", "белый", "white", "білий"),
  c("grau", "grau", "серый", "grey", "сірий"),
  c("braun", "braun", "коричневый", "brown", "коричневий"),
];
