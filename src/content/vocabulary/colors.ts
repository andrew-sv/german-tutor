import type { Word } from "@/lib/types";

const c = (id: string, lemma: string, ru: string, en: string): Word => ({
  id,
  level: "A1",
  theme: "colors",
  lemma,
  pos: "adjective",
  translation: { ru, en },
  examples: [],
});

export const colors: Word[] = [
  { ...c("rot", "rot", "красный", "red"), examples: [{ de: "Der Apfel ist rot.", translation: { ru: "Яблоко красное.", en: "The apple is red." } }] },
  c("blau", "blau", "синий, голубой", "blue"),
  c("gruen", "grün", "зелёный", "green"),
  c("gelb", "gelb", "жёлтый", "yellow"),
  c("schwarz", "schwarz", "чёрный", "black"),
  c("weiss", "weiß", "белый", "white"),
  c("grau", "grau", "серый", "grey"),
  c("braun", "braun", "коричневый", "brown"),
];
