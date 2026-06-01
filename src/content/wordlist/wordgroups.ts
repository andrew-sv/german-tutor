import type { Word } from "@/lib/types";
import { n, a, w } from "./build";

// Words from the Goethe A1 "Wortgruppenliste" (groups) that are not in the
// alphabetical list: weekdays, months, times of day, directions, units, etc.

const weekdays: Word[] = [
  n("m", "Wochentag", "Wochentage", "день недели", "weekday", "time"),
  n("m", "Dienstag", "Dienstage", "вторник", "Tuesday", "time"),
  n("m", "Mittwoch", "Mittwoche", "среда", "Wednesday", "time"),
  n("m", "Donnerstag", "Donnerstage", "четверг", "Thursday", "time"),
  n("m", "Freitag", "Freitage", "пятница", "Friday", "time"),
  n("m", "Samstag", "Samstage", "суббота", "Saturday", "time"),
  n("m", "Sonnabend", "Sonnabende", "суббота", "Saturday", "time"),
  n("n", "Wochenende", "Wochenenden", "выходные", "weekend", "time"),
];

const timesOfDay: Word[] = [
  n("m", "Vormittag", "Vormittage", "первая половина дня", "late morning", "time"),
  n("m", "Mittag", "Mittage", "полдень", "noon", "time"),
  n("m", "Nachmittag", "Nachmittage", "вторая половина дня", "afternoon", "time"),
  n("f", "Sekunde", "Sekunden", "секунда", "second", "time"),
  n("f", "Minute", "Minuten", "минута", "minute", "time"),
];

const months: Word[] = [
  n("m", "Januar", undefined, "январь", "January", "time"),
  n("m", "Februar", undefined, "февраль", "February", "time"),
  n("m", "März", undefined, "март", "March", "time"),
  n("m", "April", undefined, "апрель", "April", "time"),
  n("m", "Mai", undefined, "май", "May", "time"),
  n("m", "Juni", undefined, "июнь", "June", "time"),
  n("m", "Juli", undefined, "июль", "July", "time"),
  n("m", "August", undefined, "август", "August", "time"),
  n("m", "September", undefined, "сентябрь", "September", "time"),
  n("m", "Oktober", undefined, "октябрь", "October", "time"),
  n("m", "November", undefined, "ноябрь", "November", "time"),
  n("m", "Dezember", undefined, "декабрь", "December", "time"),
];

const directions: Word[] = [
  n("m", "Norden", undefined, "север", "north", "places"),
  n("m", "Süden", undefined, "юг", "south", "places"),
  n("m", "Westen", undefined, "запад", "west", "places"),
  n("m", "Osten", undefined, "восток", "east", "places"),
];

const units: Word[] = [
  n("m", "Meter", "Meter", "метр", "meter", "units"),
  n("m", "Zentimeter", "Zentimeter", "сантиметр", "centimeter", "units"),
  n("m", "Kilometer", "Kilometer", "километр", "kilometer", "units"),
  n("m", "Quadratmeter", "Quadratmeter", "квадратный метр", "square meter", "units"),
  n("m", "Liter", "Liter", "литр", "liter", "units"),
  n("n", "Gramm", "Gramm", "грамм", "gram", "units"),
  n("n", "Kilo", "Kilo", "килограмм", "kilo", "units"),
  n("n", "Pfund", "Pfunde", "фунт (500 г)", "pound (500 g)", "units"),
  n("n", "Prozent", "Prozent", "процент", "percent", "units"),
];

const bigNumbers: Word[] = [
  n("f", "Million", "Millionen", "миллион", "million", "numbers"),
  n("f", "Milliarde", "Milliarden", "миллиард", "billion", "numbers"),
  w("numeral", "erste", "первый", "first", "numbers"),
  w("numeral", "zweite", "второй", "second", "numbers"),
  w("numeral", "dritte", "третий", "third", "numbers"),
];

const countries: Word[] = [
  n("n", "Deutschland", undefined, "Германия", "Germany", "countries"),
  n("n", "Europa", undefined, "Европа", "Europe", "countries"),
  n("m", "Ausländer", "Ausländer", "иностранец", "foreigner", "countries"),
  a("deutsch", "немецкий", "German", "countries"),
  a("europäisch", "европейский", "European", "countries"),
];

export const wordgroups: Word[] = [
  ...weekdays,
  ...timesOfDay,
  ...months,
  ...directions,
  ...units,
  ...bigNumbers,
  ...countries,
];
