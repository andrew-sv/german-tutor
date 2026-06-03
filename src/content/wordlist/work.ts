import type { Word } from "@/lib/types";
import { n } from "./build";

const T = "work";
export const work: Word[] = [
  n("m", "Beruf", "Berufe", "профессия", "profession", T, "професія"),
  n("f", "Arbeit", undefined, "работа", "work", T, "робота"),
  n("m", "Lehrer", "Lehrer", "учитель", "teacher (m)", T, "вчитель"),
  n("f", "Lehrerin", "Lehrerinnen", "учительница", "teacher (f)", T, "вчителька"),
  n("m", "Arzt", "Ärzte", "врач", "doctor (m)", T, "лікар"),
  n("f", "Ärztin", "Ärztinnen", "врач (ж)", "doctor (f)", T, "лікарка"),
  n("m", "Student", "Studenten", "студент", "student (m)", T, "студент"),
  n("f", "Studentin", "Studentinnen", "студентка", "student (f)", T, "студентка"),
  n("m", "Chef", "Chefs", "начальник", "boss", T, "начальник"),
  n("n", "Büro", "Büros", "офис", "office", T, "офіс"),
  n("f", "Firma", "Firmen", "фирма", "company", T, "фірма"),
  n("m", "Kollege", "Kollegen", "коллега", "colleague", T, "колега"),
];
