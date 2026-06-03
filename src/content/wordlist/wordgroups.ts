import type { Word } from "@/lib/types";
import { n, a, w } from "./build";

// Words from the Goethe A1 "Wortgruppenliste" (groups) that are not in the
// alphabetical list: weekdays, months, times of day, directions, units, etc.

const weekdays: Word[] = [
  n("m", "Wochentag", "Wochentage", "день недели", "weekday", "time", "день тижня"),
  n("m", "Dienstag", "Dienstage", "вторник", "Tuesday", "time", "вівторок"),
  n("m", "Mittwoch", "Mittwoche", "среда", "Wednesday", "time", "середа"),
  n("m", "Donnerstag", "Donnerstage", "четверг", "Thursday", "time", "четвер"),
  n("m", "Freitag", "Freitage", "пятница", "Friday", "time", "п'ятниця"),
  n("m", "Samstag", "Samstage", "суббота", "Saturday", "time", "субота"),
  n("m", "Sonnabend", "Sonnabende", "суббота", "Saturday", "time", "субота"),
  n("n", "Wochenende", "Wochenenden", "выходные", "weekend", "time", "вихідні"),
];

const timesOfDay: Word[] = [
  n("m", "Vormittag", "Vormittage", "первая половина дня", "late morning", "time", "перша половина дня"),
  n("m", "Mittag", "Mittage", "полдень", "noon", "time", "полудень"),
  n("m", "Nachmittag", "Nachmittage", "вторая половина дня", "afternoon", "time", "друга половина дня"),
  n("f", "Sekunde", "Sekunden", "секунда", "second", "time", "секунда"),
  n("f", "Minute", "Minuten", "минута", "minute", "time", "хвилина"),
];

const months: Word[] = [
  n("m", "Januar", undefined, "январь", "January", "time", "січень"),
  n("m", "Februar", undefined, "февраль", "February", "time", "лютий"),
  n("m", "März", undefined, "март", "March", "time", "березень"),
  n("m", "April", undefined, "апрель", "April", "time", "квітень"),
  n("m", "Mai", undefined, "май", "May", "time", "травень"),
  n("m", "Juni", undefined, "июнь", "June", "time", "червень"),
  n("m", "Juli", undefined, "июль", "July", "time", "липень"),
  n("m", "August", undefined, "август", "August", "time", "серпень"),
  n("m", "September", undefined, "сентябрь", "September", "time", "вересень"),
  n("m", "Oktober", undefined, "октябрь", "October", "time", "жовтень"),
  n("m", "November", undefined, "ноябрь", "November", "time", "листопад"),
  n("m", "Dezember", undefined, "декабрь", "December", "time", "грудень"),
];

const directions: Word[] = [
  n("m", "Norden", undefined, "север", "north", "places", "північ"),
  n("m", "Süden", undefined, "юг", "south", "places", "південь"),
  n("m", "Westen", undefined, "запад", "west", "places", "захід"),
  n("m", "Osten", undefined, "восток", "east", "places", "схід"),
];

const units: Word[] = [
  n("m", "Meter", "Meter", "метр", "meter", "units", "метр"),
  n("m", "Zentimeter", "Zentimeter", "сантиметр", "centimeter", "units", "сантиметр"),
  n("m", "Kilometer", "Kilometer", "километр", "kilometer", "units", "кілометр"),
  n("m", "Quadratmeter", "Quadratmeter", "квадратный метр", "square meter", "units", "квадратний метр"),
  n("m", "Liter", "Liter", "литр", "liter", "units", "літр"),
  n("n", "Gramm", "Gramm", "грамм", "gram", "units", "грам"),
  n("n", "Kilo", "Kilo", "килограмм", "kilo", "units", "кілограм"),
  n("n", "Pfund", "Pfunde", "фунт (500 г)", "pound (500 g)", "units", "фунт (500 г)"),
  n("n", "Prozent", "Prozent", "процент", "percent", "units", "відсоток"),
];

const bigNumbers: Word[] = [
  n("f", "Million", "Millionen", "миллион", "million", "numbers", "мільйон"),
  n("f", "Milliarde", "Milliarden", "миллиард", "billion", "numbers", "мільярд"),
  w("numeral", "erste", "первый", "first", "numbers", "перший"),
  w("numeral", "zweite", "второй", "second", "numbers", "другий"),
  w("numeral", "dritte", "третий", "third", "numbers", "третій"),
];

const countries: Word[] = [
  n("n", "Deutschland", undefined, "Германия", "Germany", "countries", "Німеччина"),
  n("n", "Europa", undefined, "Европа", "Europe", "countries", "Європа"),
  n("m", "Ausländer", "Ausländer", "иностранец", "foreigner", "countries", "іноземець"),
  a("deutsch", "немецкий", "German", "countries", "німецький"),
  a("europäisch", "европейский", "European", "countries", "європейський"),
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
