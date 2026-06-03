// Compact builders for the extended Goethe A1 wordlist. These keep each entry
// to a single line and produce lightweight Word objects (no full conjugation /
// examples) suitable for the vocabulary trainer.

import type { Gender, LocalizedText, Word } from "@/lib/types";

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

const tr = (ru: string, en: string, uk?: string): LocalizedText =>
  uk ? { ru, en, uk } : { ru, en };

/** Noun: gender, lemma, plural (undefined if none), ru, en, theme, [uk]. */
export const n = (
  g: Gender,
  lemma: string,
  plural: string | undefined,
  ru: string,
  en: string,
  theme: string,
  uk?: string
): Word => ({
  id: `x-${slug(lemma)}`,
  level: "A1",
  tier: "extended",
  theme,
  lemma,
  pos: "noun",
  translation: tr(ru, en, uk),
  noun: { gender: g, plural },
  examples: [],
});

/** Verb (no conjugation table at this tier). */
export const v = (lemma: string, ru: string, en: string, theme: string, uk?: string): Word => ({
  id: `x-${slug(lemma)}`,
  level: "A1",
  tier: "extended",
  theme,
  lemma,
  pos: "verb",
  translation: tr(ru, en, uk),
  examples: [],
});

/** Adjective. */
export const a = (lemma: string, ru: string, en: string, theme: string, uk?: string): Word => ({
  id: `x-${slug(lemma)}`,
  level: "A1",
  tier: "extended",
  theme,
  lemma,
  pos: "adjective",
  translation: tr(ru, en, uk),
  examples: [],
});

/** Any other part of speech (adverb, conjunction, preposition, numeral, …). */
export const w = (
  pos: Word["pos"],
  lemma: string,
  ru: string,
  en: string,
  theme: string,
  uk?: string
): Word => ({
  id: `x-${slug(lemma)}`,
  level: "A1",
  tier: "extended",
  theme,
  lemma,
  pos,
  translation: tr(ru, en, uk),
  examples: [],
});
