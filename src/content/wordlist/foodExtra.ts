import type { Word } from "@/lib/types";
import { n } from "./build";

const T = "food";
export const foodExtra: Word[] = [
  n("m", "Saft", "Säfte", "сок", "juice", T),
  n("n", "Bier", "Biere", "пиво", "beer", T),
  n("m", "Wein", "Weine", "вино", "wine", T),
  n("f", "Suppe", "Suppen", "суп", "soup", T),
  n("m", "Salat", "Salate", "салат", "salad", T),
  n("m", "Fisch", "Fische", "рыба", "fish", T),
  n("f", "Kartoffel", "Kartoffeln", "картофель", "potato", T),
  n("f", "Tomate", "Tomaten", "помидор", "tomato", T),
  n("m", "Reis", undefined, "рис", "rice", T),
  n("m", "Zucker", undefined, "сахар", "sugar", T),
  n("n", "Salz", undefined, "соль", "salt", T),
  n("f", "Butter", undefined, "масло (сливочное)", "butter", T),
  n("f", "Banane", "Bananen", "банан", "banana", T),
  n("f", "Orange", "Orangen", "апельсин", "orange", T),
  n("m", "Kuchen", "Kuchen", "пирог", "cake", T),
  n("f", "Wurst", "Würste", "колбаса", "sausage", T),
  n("n", "Gemüse", undefined, "овощи", "vegetables", T),
  n("n", "Frühstück", undefined, "завтрак", "breakfast", T),
];
