import type { Word } from "@/lib/types";
import { n } from "./build";

const T = "work";
export const work: Word[] = [
  n("m", "Beruf", "Berufe", "профессия", "profession", T),
  n("f", "Arbeit", undefined, "работа", "work", T),
  n("m", "Lehrer", "Lehrer", "учитель", "teacher (m)", T),
  n("f", "Lehrerin", "Lehrerinnen", "учительница", "teacher (f)", T),
  n("m", "Arzt", "Ärzte", "врач", "doctor (m)", T),
  n("f", "Ärztin", "Ärztinnen", "врач (ж)", "doctor (f)", T),
  n("m", "Student", "Studenten", "студент", "student (m)", T),
  n("f", "Studentin", "Studentinnen", "студентка", "student (f)", T),
  n("m", "Chef", "Chefs", "начальник", "boss", T),
  n("n", "Büro", "Büros", "офис", "office", T),
  n("f", "Firma", "Firmen", "фирма", "company", T),
  n("m", "Kollege", "Kollegen", "коллега", "colleague", T),
];
