import type { Word } from "@/lib/types";
import { n, v } from "./build";

const T = "shopping";
export const shopping: Word[] = [
  n("n", "Geld", undefined, "деньги", "money", T),
  n("m", "Euro", "Euro", "евро", "euro", T),
  n("m", "Cent", "Cent", "цент", "cent", T),
  n("m", "Preis", "Preise", "цена", "price", T),
  n("f", "Kasse", "Kassen", "касса", "checkout / till", T),
  n("f", "Rechnung", "Rechnungen", "счёт", "bill", T),
  v("kaufen", "покупать", "to buy", T),
  v("verkaufen", "продавать", "to sell", T),
  v("bezahlen", "платить", "to pay", T),
  v("kosten", "стоить", "to cost", T),
];
