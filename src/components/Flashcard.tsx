"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { ARTICLE, type Word } from "@/lib/types";
import type { Grade } from "@/lib/srs";
import { Badge, Button, Card } from "./ui";

const GRADES: { grade: Grade; key: "grade_again" | "grade_hard" | "grade_good" | "grade_easy"; variant: "danger" | "secondary" | "primary" }[] = [
  { grade: "again", key: "grade_again", variant: "danger" },
  { grade: "hard", key: "grade_hard", variant: "secondary" },
  { grade: "good", key: "grade_good", variant: "secondary" },
  { grade: "easy", key: "grade_easy", variant: "primary" },
];

/** German front face: nouns show their article. */
export function frontFace(word: Word): string {
  return word.pos === "noun" && word.noun ? `${ARTICLE[word.noun.gender]} ${word.lemma}` : word.lemma;
}

export function Flashcard({ word, onGrade }: { word: Word; onGrade: (g: Grade) => void }) {
  const { t, tc } = useI18n();
  const [revealed, setRevealed] = useState(false);

  return (
    <Card className="flex flex-col items-center gap-5 py-8 text-center">
      <Badge tone="zinc">{word.level}</Badge>
      <p className="text-3xl font-bold text-zinc-900">{frontFace(word)}</p>

      {!revealed ? (
        <Button onClick={() => setRevealed(true)}>{t("showAnswer")}</Button>
      ) : (
        <>
          <p className="text-lg text-zinc-600">{tc(word.translation)}</p>
          {word.noun?.plural && (
            <p className="text-sm text-zinc-400">
              {t("plural")}: die {word.noun.plural}
            </p>
          )}
          {word.examples[0] && <p className="text-sm text-zinc-400">{word.examples[0].de}</p>}
          <div className="grid w-full grid-cols-2 gap-2 sm:grid-cols-4">
            {GRADES.map((g) => (
              <Button key={g.grade} variant={g.variant} onClick={() => onGrade(g.grade)}>
                {t(g.key)}
              </Button>
            ))}
          </div>
        </>
      )}
    </Card>
  );
}
