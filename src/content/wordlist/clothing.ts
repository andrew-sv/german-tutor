import type { Word } from "@/lib/types";
import { n } from "./build";

const T = "clothing";
export const clothing: Word[] = [
  n("f", "Kleidung", undefined, "одежда", "clothing", T),
  n("f", "Hose", "Hosen", "брюки", "trousers", T),
  n("n", "Hemd", "Hemden", "рубашка", "shirt", T),
  n("f", "Jacke", "Jacken", "куртка", "jacket", T),
  n("m", "Mantel", "Mäntel", "пальто", "coat", T),
  n("n", "Kleid", "Kleider", "платье", "dress", T),
  n("m", "Rock", "Röcke", "юбка", "skirt", T),
  n("m", "Schuh", "Schuhe", "ботинок", "shoe", T),
  n("f", "Socke", "Socken", "носок", "sock", T),
  n("m", "Pullover", "Pullover", "свитер", "pullover", T),
  n("n", "T-Shirt", "T-Shirts", "футболка", "t-shirt", T),
  n("f", "Mütze", "Mützen", "шапка", "cap", T),
  n("m", "Hut", "Hüte", "шляпа", "hat", T),
  n("f", "Brille", "Brillen", "очки", "glasses", T),
];
