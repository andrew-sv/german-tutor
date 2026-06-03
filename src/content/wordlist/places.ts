import type { Word } from "@/lib/types";
import { n } from "./build";

const T = "places";
export const places: Word[] = [
  n("f", "Stadt", "Städte", "город", "city", T, "місто"),
  n("n", "Dorf", "Dörfer", "деревня", "village", T, "село"),
  n("f", "Straße", "Straßen", "улица", "street", T, "вулиця"),
  n("m", "Bahnhof", "Bahnhöfe", "вокзал", "station", T, "вокзал"),
  n("m", "Flughafen", "Flughäfen", "аэропорт", "airport", T, "аеропорт"),
  n("m", "Supermarkt", "Supermärkte", "супермаркет", "supermarket", T, "супермаркет"),
  n("n", "Geschäft", "Geschäfte", "магазин", "shop", T, "магазин"),
  n("m", "Markt", "Märkte", "рынок", "market", T, "ринок"),
  n("f", "Bank", "Banken", "банк", "bank", T, "банк"),
  n("f", "Post", undefined, "почта", "post office", T, "пошта"),
  n("n", "Krankenhaus", "Krankenhäuser", "больница", "hospital", T, "лікарня"),
  n("f", "Apotheke", "Apotheken", "аптека", "pharmacy", T, "аптека"),
  n("n", "Restaurant", "Restaurants", "ресторан", "restaurant", T, "ресторан"),
  n("n", "Hotel", "Hotels", "отель", "hotel", T, "готель"),
  n("n", "Kino", "Kinos", "кинотеатр", "cinema", T, "кінотеатр"),
  n("m", "Park", "Parks", "парк", "park", T, "парк"),
  n("f", "Kirche", "Kirchen", "церковь", "church", T, "церква"),
  n("f", "Universität", "Universitäten", "университет", "university", T, "університет"),
];
