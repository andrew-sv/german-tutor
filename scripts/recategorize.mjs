// Re-assigns the `category` column of data/goethe-a1.tsv for specific lemmas.
// Used to split the overly-broad "function" bucket into meaningful categories.
// Run: node scripts/recategorize.mjs   (then re-run import-wortliste.mjs)

import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const tsvPath = resolve(root, "data/goethe-a1.tsv");

// lemma -> new category
const MAP = {
  // 📞 communication: phone, mail, written messages, talking-about
  Absender: "communication", Anrede: "communication", Anruf: "communication",
  Anrufbeantworter: "communication", Ansage: "communication", Antwort: "communication",
  Anzeige: "communication", Aussage: "communication", Auskunft: "communication",
  Bogen: "communication", Brief: "communication", Briefmarke: "communication",
  Durchsage: "communication", "E-Mail": "communication", Empfänger: "communication",
  Fax: "communication", Formular: "communication", Frage: "communication",
  Gespräch: "communication", Information: "communication", Karte: "communication",
  Nummer: "communication", Papier: "communication", Postleitzahl: "communication",
  Prospekt: "communication", Telefon: "communication", telefonieren: "communication",
  Text: "communication", Unterschrift: "communication", unterschreiben: "communication",
  Vorwahl: "communication", vorstellen: "communication", Zeitung: "communication",

  // 📚 education / language study
  Aufgabe: "education", Buchstabe: "education", Satz: "education",
  Thema: "education", Wort: "education",

  // 💭 abstract / general nouns
  Anfang: "abstract", Beispiel: "abstract", Blick: "abstract", Ergebnis: "abstract",
  Fehler: "abstract", Gewicht: "abstract", Glück: "abstract", Gruppe: "abstract",
  Hilfe: "abstract", Lösung: "abstract", Mitte: "abstract", Ordnung: "abstract",
  Plan: "abstract", Problem: "abstract", Teil: "abstract", Vorsicht: "abstract",
  Welt: "abstract", Ende: "abstract", Leben: "abstract", Schluss: "abstract",

  // remaining content nouns mis-filed under "function"
  Handy: "communication", Name: "communication", Sprache: "education",

  // descriptive words that were mis-filed under "function"
  automatisch: "adjectives", eilig: "adjectives", frei: "adjectives", fremd: "adjectives",
  gleich: "adjectives", gültig: "adjectives", international: "adjectives", klar: "adjectives",
  kulturell: "adjectives", möglich: "adjectives", normal: "adjectives", pünktlich: "adjectives",

  // misc relocations
  Platz: "places", Führung: "freetime",
};

// Within the "function" bucket, split by part of speech so prepositions and
// adverbs get their own categories; pronouns & conjunctions stay "function".
const POS_SPLIT = { preposition: "prepositions", adverb: "adverbs", adjective: "adjectives" };

const lines = readFileSync(tsvPath, "utf8").split(/\r?\n/);
const header = lines[0].split("\t");
const catIdx = header.indexOf("category");
const lemmaIdx = header.indexOf("lemma");
const posIdx = header.indexOf("pos");

let changed = 0;
const out = lines.map((line, i) => {
  if (i === 0 || !line.trim() || line.startsWith("#")) return line;
  const cols = line.split("\t");
  const lemma = (cols[lemmaIdx] ?? "").trim();
  const pos = (cols[posIdx] ?? "").trim();

  // Explicit lemma mapping wins; otherwise split the "function" bucket by POS.
  let target = MAP[lemma];
  if (!target && cols[catIdx] === "function") target = POS_SPLIT[pos];

  if (target && cols[catIdx] !== target) {
    cols[catIdx] = target;
    changed++;
    return cols.join("\t");
  }
  return line;
});

writeFileSync(tsvPath, out.join("\n"), "utf8");
console.log(`✓ Re-categorized ${changed} entries in ${tsvPath}`);
