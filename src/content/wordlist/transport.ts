import type { Word } from "@/lib/types";
import { n, v } from "./build";

const T = "transport";
export const transport: Word[] = [
  n("n", "Auto", "Autos", "машина", "car", T, "машина, авто"),
  n("m", "Bus", "Busse", "автобус", "bus", T, "автобус"),
  n("m", "Zug", "Züge", "поезд", "train", T, "потяг"),
  n("n", "Fahrrad", "Fahrräder", "велосипед", "bicycle", T, "велосипед"),
  n("n", "Flugzeug", "Flugzeuge", "самолёт", "airplane", T, "літак"),
  n("f", "U-Bahn", "U-Bahnen", "метро", "subway", T, "метро"),
  n("f", "Straßenbahn", "Straßenbahnen", "трамвай", "tram", T, "трамвай"),
  n("n", "Taxi", "Taxis", "такси", "taxi", T, "таксі"),
  n("n", "Schiff", "Schiffe", "корабль", "ship", T, "корабель"),
  n("f", "Fahrkarte", "Fahrkarten", "билет", "ticket", T, "квиток"),
  v("fahren", "ехать, водить", "to drive / go", T, "їхати"),
  v("fliegen", "лететь", "to fly", T, "летіти"),
];
