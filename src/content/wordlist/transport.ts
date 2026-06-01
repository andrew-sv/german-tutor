import type { Word } from "@/lib/types";
import { n, v } from "./build";

const T = "transport";
export const transport: Word[] = [
  n("n", "Auto", "Autos", "машина", "car", T),
  n("m", "Bus", "Busse", "автобус", "bus", T),
  n("m", "Zug", "Züge", "поезд", "train", T),
  n("n", "Fahrrad", "Fahrräder", "велосипед", "bicycle", T),
  n("n", "Flugzeug", "Flugzeuge", "самолёт", "airplane", T),
  n("f", "U-Bahn", "U-Bahnen", "метро", "subway", T),
  n("f", "Straßenbahn", "Straßenbahnen", "трамвай", "tram", T),
  n("n", "Taxi", "Taxis", "такси", "taxi", T),
  n("n", "Schiff", "Schiffe", "корабль", "ship", T),
  n("f", "Fahrkarte", "Fahrkarten", "билет", "ticket", T),
  v("fahren", "ехать, водить", "to drive / go", T),
  v("fliegen", "лететь", "to fly", T),
];
