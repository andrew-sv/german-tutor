import type { Word } from "@/lib/types";
import { n } from "./build";

const T = "places";
export const places: Word[] = [
  n("f", "Stadt", "Städte", "город", "city", T),
  n("n", "Dorf", "Dörfer", "деревня", "village", T),
  n("f", "Straße", "Straßen", "улица", "street", T),
  n("m", "Bahnhof", "Bahnhöfe", "вокзал", "station", T),
  n("m", "Flughafen", "Flughäfen", "аэропорт", "airport", T),
  n("m", "Supermarkt", "Supermärkte", "супермаркет", "supermarket", T),
  n("n", "Geschäft", "Geschäfte", "магазин", "shop", T),
  n("m", "Markt", "Märkte", "рынок", "market", T),
  n("f", "Bank", "Banken", "банк", "bank", T),
  n("f", "Post", undefined, "почта", "post office", T),
  n("n", "Krankenhaus", "Krankenhäuser", "больница", "hospital", T),
  n("f", "Apotheke", "Apotheken", "аптека", "pharmacy", T),
  n("n", "Restaurant", "Restaurants", "ресторан", "restaurant", T),
  n("n", "Hotel", "Hotels", "отель", "hotel", T),
  n("n", "Kino", "Kinos", "кинотеатр", "cinema", T),
  n("m", "Park", "Parks", "парк", "park", T),
  n("f", "Kirche", "Kirchen", "церковь", "church", T),
  n("f", "Universität", "Universitäten", "университет", "university", T),
];
