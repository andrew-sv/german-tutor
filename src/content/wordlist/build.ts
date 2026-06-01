// Compact builders for the extended Goethe A1 wordlist. These keep each entry
// to a single line and produce lightweight Word objects (no full conjugation /
// examples) suitable for the vocabulary trainer.

import type { Gender, Word } from "@/lib/types";

/** ASCII slug for stable ids: ä→a, ö→o, ü→u, ß→ss, drop the rest. */
function slug(s: string): string {
  return s
    .toLowerCase()
    .replace(/ä/g, "a")
    .replace(/ö/g, "o")
    .replace(/ü/g, "u")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "");
}

/** Noun: gender, lemma, plural (undefined if none), ru, en. */
export const n = (
  g: Gender,
  lemma: string,
  plural: string | undefined,
  ru: string,
  en: string,
  theme: string
): Word => ({
  id: `x-${slug(lemma)}`,
  level: "A1",
  tier: "extended",
  theme,
  lemma,
  pos: "noun",
  translation: { ru, en },
  noun: { gender: g, plural },
  examples: [],
});

/** Verb (no conjugation table at this tier). */
export const v = (lemma: string, ru: string, en: string, theme: string): Word => ({
  id: `x-${slug(lemma)}`,
  level: "A1",
  tier: "extended",
  theme,
  lemma,
  pos: "verb",
  translation: { ru, en },
  examples: [],
});

/** Adjective. */
export const a = (lemma: string, ru: string, en: string, theme: string): Word => ({
  id: `x-${slug(lemma)}`,
  level: "A1",
  tier: "extended",
  theme,
  lemma,
  pos: "adjective",
  translation: { ru, en },
  examples: [],
});

/** Any other part of speech (adverb, conjunction, preposition, numeral, …). */
export const w = (
  pos: Word["pos"],
  lemma: string,
  ru: string,
  en: string,
  theme: string
): Word => ({
  id: `x-${slug(lemma)}`,
  level: "A1",
  tier: "extended",
  theme,
  lemma,
  pos,
  translation: { ru, en },
  examples: [],
});
