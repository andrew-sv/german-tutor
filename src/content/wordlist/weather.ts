import type { Word } from "@/lib/types";
import { n, a } from "./build";

const T = "weather";
export const weather: Word[] = [
  n("n", "Wetter", undefined, "погода", "weather", T, "погода"),
  n("f", "Sonne", "Sonnen", "солнце", "sun", T, "сонце"),
  n("m", "Regen", undefined, "дождь", "rain", T, "дощ"),
  n("m", "Schnee", undefined, "снег", "snow", T, "сніг"),
  n("m", "Wind", "Winde", "ветер", "wind", T, "вітер"),
  n("f", "Wolke", "Wolken", "облако", "cloud", T, "хмара"),
  n("m", "Himmel", undefined, "небо", "sky", T, "небо"),
  n("m", "Frühling", undefined, "весна", "spring", T, "весна"),
  n("m", "Sommer", undefined, "лето", "summer", T, "літо"),
  n("m", "Herbst", undefined, "осень", "autumn", T, "осінь"),
  n("m", "Winter", undefined, "зима", "winter", T, "зима"),
  a("warm", "тёплый", "warm", T, "теплий"),
  a("kalt", "холодный", "cold", T, "холодний"),
  a("heiß", "жаркий", "hot", T, "гарячий"),
  a("sonnig", "солнечный", "sunny", T, "сонячний"),
];
