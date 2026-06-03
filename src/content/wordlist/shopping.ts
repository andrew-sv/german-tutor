import type { Word } from "@/lib/types";
import { n, v } from "./build";

const T = "shopping";
export const shopping: Word[] = [
  n("n", "Geld", undefined, "деньги", "money", T, "гроші"),
  n("m", "Euro", "Euro", "евро", "euro", T, "євро"),
  n("m", "Cent", "Cent", "цент", "cent", T, "цент"),
  n("m", "Preis", "Preise", "цена", "price", T, "ціна"),
  n("f", "Kasse", "Kassen", "касса", "checkout / till", T, "каса"),
  n("f", "Rechnung", "Rechnungen", "счёт", "bill", T, "рахунок"),
  v("kaufen", "покупать", "to buy", T, "купувати"),
  v("verkaufen", "продавать", "to sell", T, "продавати"),
  v("bezahlen", "платить", "to pay", T, "платити"),
  v("kosten", "стоить", "to cost", T, "коштувати"),
];
