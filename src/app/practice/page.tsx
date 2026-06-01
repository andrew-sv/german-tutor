"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { useStore } from "@/lib/store";
import { dueItems, type Grade } from "@/lib/srs";
import { getExercise, getWord } from "@/content";
import { Badge, Button, Card, ProgressBar } from "@/components/ui";
import { ExerciseRunner } from "@/components/ExerciseRunner";
import { Flashcard } from "@/components/Flashcard";
import { Hydrated } from "@/components/Hydrated";

function Session() {
  const { t } = useI18n();
  const reviewItems = useStore((s) => s.reviewItems);
  const gradeItem = useStore((s) => s.gradeItem);
  const recordActivity = useStore((s) => s.recordActivity);

  // Snapshot the queue once at mount so re-grading doesn't reshuffle mid-session.
  const queue = useMemo(() => dueItems(Object.values(reviewItems)).map((i) => i.id), []);
  const [idx, setIdx] = useState(0);
  const lastCorrect = useRef(true);

  useEffect(() => {
    if (queue.length) recordActivity();
  }, [queue.length, recordActivity]);

  if (queue.length === 0) {
    return (
      <Card className="flex flex-col items-center gap-4 py-10 text-center">
        <span className="text-4xl">☕️</span>
        <p className="text-zinc-500">{t("noReviews")}</p>
        <Button href="/learn">{t("nav_learn")}</Button>
      </Card>
    );
  }

  if (idx >= queue.length) {
    return (
      <Card className="flex flex-col items-center gap-4 py-10 text-center">
        <span className="text-5xl">✅</span>
        <p className="text-lg font-semibold text-zinc-900">{t("sessionDone")}</p>
        <Button href="/">{t("nav_home")}</Button>
      </Card>
    );
  }

  const id = queue[idx];
  const grade = (g: Grade) => {
    gradeItem(id, g);
    setIdx((i) => i + 1);
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-zinc-900">{t("nav_practice")}</h1>
        <Badge tone="zinc">
          {idx + 1}/{queue.length}
        </Badge>
      </div>
      <ProgressBar value={idx / queue.length} />

      {id.startsWith("word:") &&
        (() => {
          const word = getWord(id.slice("word:".length));
          if (!word) {
            // Orphaned id (content changed) — skip it.
            grade("good");
            return null;
          }
          return <Flashcard key={id} word={word} onGrade={grade} />;
        })()}

      {id.startsWith("exercise:") &&
        (() => {
          const exercise = getExercise(id.slice("exercise:".length));
          if (!exercise) {
            grade("good");
            return null;
          }
          return (
            <ExerciseRunner
              key={id}
              exercise={exercise}
              isLast={idx === queue.length - 1}
              onResult={(correct) => {
                lastCorrect.current = correct;
              }}
              onNext={() => grade(lastCorrect.current ? "good" : "again")}
            />
          );
        })()}
    </div>
  );
}

export default function PracticePage() {
  return (
    <Hydrated fallback={<div className="text-zinc-400">…</div>}>
      <Session />
    </Hydrated>
  );
}
