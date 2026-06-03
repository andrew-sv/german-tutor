import type { Word } from "@/lib/types";
import { n } from "./build";

const T = "clothing";
export const clothing: Word[] = [
  n("f", "Kleidung", undefined, "одежда", "clothing", T, "одяг"),
  n("f", "Hose", "Hosen", "брюки", "trousers", T, "штани"),
  n("n", "Hemd", "Hemden", "рубашка", "shirt", T, "сорочка"),
  n("f", "Jacke", "Jacken", "куртка", "jacket", T, "куртка"),
  n("m", "Mantel", "Mäntel", "пальто", "coat", T, "пальто"),
  n("n", "Kleid", "Kleider", "платье", "dress", T, "сукня"),
  n("m", "Rock", "Röcke", "юбка", "skirt", T, "спідниця"),
  n("m", "Schuh", "Schuhe", "ботинок", "shoe", T, "черевик"),
  n("f", "Socke", "Socken", "носок", "sock", T, "шкарпетка"),
  n("m", "Pullover", "Pullover", "свитер", "pullover", T, "светр"),
  n("n", "T-Shirt", "T-Shirts", "футболка", "t-shirt", T, "футболка"),
  n("f", "Mütze", "Mützen", "шапка", "cap", T, "шапка"),
  n("m", "Hut", "Hüte", "шляпа", "hat", T, "капелюх"),
  n("f", "Brille", "Brillen", "очки", "glasses", T, "окуляри"),
];
