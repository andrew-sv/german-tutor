"use client";

import { useI18n } from "@/lib/i18n";
import { ARTICLE, type Word } from "@/lib/types";
import { Badge, Card } from "./ui";

const POS_LABEL: Record<string, { ru: string; en: string; tone: "blue" | "green" | "amber" | "zinc" }> = {
  noun: { ru: "сущ.", en: "noun", tone: "blue" },
  verb: { ru: "глаг.", en: "verb", tone: "green" },
  adjective: { ru: "прил.", en: "adj.", tone: "amber" },
  adverb: { ru: "нареч.", en: "adv.", tone: "zinc" },
  preposition: { ru: "предл.", en: "prep.", tone: "zinc" },
  pronoun: { ru: "мест.", en: "pron.", tone: "zinc" },
  conjunction: { ru: "союз", en: "conj.", tone: "zinc" },
  numeral: { ru: "числ.", en: "num.", tone: "zinc" },
  phrase: { ru: "фраза", en: "phrase", tone: "zinc" },
};

function Headword({ word }: { word: Word }) {
  if (word.pos === "noun" && word.noun) {
    return (
      <>
        <span className="text-zinc-400">{ARTICLE[word.noun.gender]} </span>
        {word.lemma}
      </>
    );
  }
  return <>{word.lemma}</>;
}

function Forms({ word }: { word: Word }) {
  const { t, tc } = useI18n();
  const rows: { label: string; value: string }[] = [];

  if (word.noun) {
    if (word.noun.plural) rows.push({ label: t("plural"), value: `die ${word.noun.plural}` });
    if (word.noun.genitiveSingular) rows.push({ label: "Genitiv", value: word.noun.genitiveSingular });
  }
  if (word.adjective) {
    if (word.adjective.comparative) rows.push({ label: t("comparative"), value: word.adjective.comparative });
    if (word.adjective.superlative) rows.push({ label: t("superlative"), value: word.adjective.superlative });
  }

  if (word.verb) {
    const c = word.verb.praesens;
    return (
      <div className="flex flex-col gap-3">
        <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm sm:grid-cols-3">
          {(
            [
              ["ich", c.ich],
              ["du", c.du],
              ["er/sie/es", c.erSieEs],
              ["wir", c.wir],
              ["ihr", c.ihr],
              ["sie/Sie", c.sieSie],
            ] as const
          ).map(([p, v]) => (
            <div key={p} className="flex justify-between gap-2 border-b border-zinc-100 py-0.5">
              <span className="text-zinc-400">{p}</span>
              <span className="font-medium text-zinc-800">{v}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 text-xs">
          <Badge tone="zinc">Partizip II: {word.verb.partizipII}</Badge>
          {word.verb.praeteritum3sg && <Badge tone="zinc">Präteritum: {word.verb.praeteritum3sg}</Badge>}
          <Badge tone={word.verb.auxiliary === "sein" ? "amber" : "zinc"}>Hilfsverb: {word.verb.auxiliary}</Badge>
          {word.verb.separable && <Badge tone="blue">{tc({ ru: "отделяемый", en: "separable" })}</Badge>}
          {word.verb.irregular && <Badge tone="red">{tc({ ru: "неправильный", en: "irregular" })}</Badge>}
        </div>
      </div>
    );
  }

  if (rows.length === 0) return null;
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm">
      {rows.map((r) => (
        <div key={r.label} className="flex justify-between gap-2 border-b border-zinc-100 py-0.5">
          <span className="text-zinc-400">{r.label}</span>
          <span className="font-medium text-zinc-800">{r.value}</span>
        </div>
      ))}
    </div>
  );
}

export function WordCard({ word }: { word: Word }) {
  const { t, tc } = useI18n();
  const pos = POS_LABEL[word.pos];
  const hasForms = Boolean(word.verb || (word.noun && (word.noun.plural || word.noun.genitiveSingular)) || word.adjective);

  return (
    <Card className="flex flex-col gap-3">
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="text-lg font-bold text-zinc-900">
          <Headword word={word} />
        </h3>
        <div className="flex items-center gap-2">
          <Badge tone={pos.tone}>{tc(pos)}</Badge>
          <Badge tone="zinc">{word.level}</Badge>
        </div>
      </div>

      <p className="text-zinc-600">{tc(word.translation)}</p>

      {hasForms && (
        <div>
          <h4 className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-zinc-400">{t("forms")}</h4>
          <Forms word={word} />
        </div>
      )}

      {word.note && (
        <p className="rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-800">{tc(word.note)}</p>
      )}

      {word.examples.length > 0 && (
        <ul className="flex flex-col gap-1">
          {word.examples.map((ex, i) => (
            <li key={i} className="text-sm">
              <span className="font-medium text-zinc-900">{ex.de}</span>
              <span className="text-zinc-400"> — </span>
              <span className="text-zinc-600">{tc(ex.translation)}</span>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}
