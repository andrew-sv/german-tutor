import type { Word } from "@/lib/types";
import { n } from "./build";

const T = "food";
export const foodExtra: Word[] = [
  n("m", "Saft", "Säfte", "сок", "juice", T, "сік"),
  n("n", "Bier", "Biere", "пиво", "beer", T, "пиво"),
  n("m", "Wein", "Weine", "вино", "wine", T, "вино"),
  n("f", "Suppe", "Suppen", "суп", "soup", T, "суп"),
  n("m", "Salat", "Salate", "салат", "salad", T, "салат"),
  n("m", "Fisch", "Fische", "рыба", "fish", T, "риба"),
  n("f", "Kartoffel", "Kartoffeln", "картофель", "potato", T, "картопля"),
  n("f", "Tomate", "Tomaten", "помидор", "tomato", T, "помідор"),
  n("m", "Reis", undefined, "рис", "rice", T, "рис"),
  n("m", "Zucker", undefined, "сахар", "sugar", T, "цукор"),
  n("n", "Salz", undefined, "соль", "salt", T, "сіль"),
  n("f", "Butter", undefined, "масло (сливочное)", "butter", T, "масло (вершкове)"),
  n("f", "Banane", "Bananen", "банан", "banana", T, "банан"),
  n("f", "Orange", "Orangen", "апельсин", "orange", T, "апельсин"),
  n("m", "Kuchen", "Kuchen", "пирог", "cake", T, "пиріг"),
  n("f", "Wurst", "Würste", "колбаса", "sausage", T, "ковбаса"),
  n("n", "Gemüse", undefined, "овощи", "vegetables", T, "овочі"),
  n("n", "Frühstück", undefined, "завтрак", "breakfast", T, "сніданок"),
];
