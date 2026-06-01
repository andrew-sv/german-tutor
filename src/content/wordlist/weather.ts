import type { Word } from "@/lib/types";
import { n, a } from "./build";

const T = "weather";
export const weather: Word[] = [
  n("n", "Wetter", undefined, "погода", "weather", T),
  n("f", "Sonne", "Sonnen", "солнце", "sun", T),
  n("m", "Regen", undefined, "дождь", "rain", T),
  n("m", "Schnee", undefined, "снег", "snow", T),
  n("m", "Wind", "Winde", "ветер", "wind", T),
  n("f", "Wolke", "Wolken", "облако", "cloud", T),
  n("m", "Himmel", undefined, "небо", "sky", T),
  n("m", "Frühling", undefined, "весна", "spring", T),
  n("m", "Sommer", undefined, "лето", "summer", T),
  n("m", "Herbst", undefined, "осень", "autumn", T),
  n("m", "Winter", undefined, "зима", "winter", T),
  a("warm", "тёплый", "warm", T),
  a("kalt", "холодный", "cold", T),
  a("heiß", "жаркий", "hot", T),
  a("sonnig", "солнечный", "sunny", T),
];
