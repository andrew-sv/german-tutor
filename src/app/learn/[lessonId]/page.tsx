"use client";

import { useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { getExercise, getLesson, getGrammarTopic, getWord } from "@/content";
import { useI18n } from "@/lib/i18n";
import { useStore } from "@/lib/store";
import { Button, Card, ProgressBar, Badge } from "@/components/ui";
import { GrammarView } from "@/components/GrammarView";
import { WordCard } from "@/components/WordCard";
import { ExerciseRunner } from "@/components/ExerciseRunner";
import { Hydrated } from "@/components/Hydrated";

function LessonRunner({ lessonId }: { lessonId: string }) {
  const { t, tc } = useI18n();
  const lesson = getLesson(lessonId);
  const [stepIdx, setStepIdx] = useState(0);
  const [done, setDone] = useState(false);

  const ensureItem = useStore((s) => s.ensureItem);
  const gradeItem = useStore((s) => s.gradeItem);
  const completeLesson = useStore((s) => s.completeLesson);
  const recordActivity = useStore((s) => s.recordActivity);

  const steps = useMemo(() => lesson?.steps ?? [], [lesson]);

  if (!lesson) {
    return <Card>Lesson not found.</Card>;
  }

  const step = steps[stepIdx];
  const isLast = stepIdx === steps.length - 1;
  const progress = stepIdx / steps.length;

  function advance() {
    if (isLast) {
      completeLesson(lesson!.id);
      recordActivity();
      setDone(true);
    } else {
      setStepIdx((i) => i + 1);
    }
  }

  if (done) {
    return (
      <Card className="flex flex-col items-center gap-4 py-10 text-center">
        <span className="text-5xl">🎉</span>
        <h2 className="text-xl font-bold text-zinc-900">{tc(lesson.title)}</h2>
        <p className="text-zinc-500">{t("sessionDone")}</p>
        <div className="flex gap-3">
          <Button href="/learn">{t("nav_learn")}</Button>
          <Button href="/practice" variant="secondary">
            {t("nav_practice")}
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h1 className="font-semibold text-zinc-900">{tc(lesson.title)}</h1>
          <Badge tone="zinc">
            {stepIdx + 1}/{steps.length}
          </Badge>
        </div>
        <ProgressBar value={progress} />
      </div>

      {step.type === "grammar" &&
        (() => {
          const topic = getGrammarTopic(step.topicId);
          if (!topic) return null;
          return (
            <>
              <GrammarView topic={topic} />
              <div className="flex justify-end">
                <Button onClick={advance}>{isLast ? t("finish") : t("next")} →</Button>
              </div>
            </>
          );
        })()}

      {step.type === "vocab" &&
        (() => {
          // Register these words into spaced repetition as soon as they're seen.
          const words = step.wordIds.map(getWord).filter((w) => w !== undefined);
          return (
            <>
              <div className="grid gap-4 sm:grid-cols-2">
                {words.map((w) => (
                  <WordCard key={w.id} word={w} />
                ))}
              </div>
              <div className="flex justify-end">
                <Button
                  onClick={() => {
                    words.forEach((w) => ensureItem(`word:${w.id}`));
                    advance();
                  }}
                >
                  {isLast ? t("finish") : t("next")} →
                </Button>
              </div>
            </>
          );
        })()}

      {step.type === "exercise" &&
        (() => {
          const exercise = getExercise(step.exerciseId);
          if (!exercise) return null;
          return (
            <ExerciseRunner
              key={exercise.id}
              exercise={exercise}
              isLast={isLast}
              onResult={(correct) => {
                const grade = correct ? "good" : "again";
                gradeItem(`exercise:${exercise.id}`, grade);
                if (exercise.wordId) gradeItem(`word:${exercise.wordId}`, grade);
              }}
              onNext={advance}
            />
          );
        })()}
    </div>
  );
}

export default function LessonPage() {
  const params = useParams<{ lessonId: string }>();
  return (
    <Hydrated fallback={<div className="text-zinc-400">…</div>}>
      <LessonRunner lessonId={params.lessonId} />
    </Hydrated>
  );
}
