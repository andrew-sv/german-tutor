"use client";

import { useMemo, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/cn";
import { ARTICLE, type Exercise, type Gender } from "@/lib/types";
import { Button, Card, RichText } from "./ui";

function normalize(s: string): string {
  return s.trim().toLowerCase().replace(/\s+/g, " ").replace(/[.!?]+$/, "");
}

function matchesAccepted(input: string, accepted: string[]): boolean {
  const n = normalize(input);
  return accepted.some((a) => normalize(a) === n);
}

/** Shuffle helper that is stable across renders via useMemo seeding. */
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function ExerciseRunner({
  exercise,
  onResult,
  onNext,
  isLast,
}: {
  exercise: Exercise;
  onResult: (correct: boolean) => void;
  onNext: () => void;
  isLast?: boolean;
}) {
  const { t, tc } = useI18n();
  const [answered, setAnswered] = useState(false);
  const [correct, setCorrect] = useState(false);

  // Per-kind local answer state
  const [text, setText] = useState("");
  const [choice, setChoice] = useState<number | null>(null);
  const [gender, setGender] = useState<Gender | null>(null);
  const [matches, setMatches] = useState<Record<string, string>>({});

  const shuffledNatives = useMemo(
    () => (exercise.kind === "matching" ? shuffle(exercise.pairs.map((p) => tc(p.native))) : []),
    // re-shuffle only when the exercise changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [exercise.id]
  );

  function evaluate(): boolean {
    switch (exercise.kind) {
      case "multiple-choice":
        return choice === exercise.correctIndex;
      case "article-pick":
        return gender === exercise.correct;
      case "fill-blank":
      case "conjugation":
      case "translation":
        return matchesAccepted(text, exercise.accepted);
      case "matching":
        return exercise.pairs.every((p) => matches[p.de] === tc(p.native));
    }
  }

  function check() {
    const ok = evaluate();
    setCorrect(ok);
    setAnswered(true);
    onResult(ok);
  }

  const canCheck = (() => {
    switch (exercise.kind) {
      case "multiple-choice":
        return choice !== null;
      case "article-pick":
        return gender !== null;
      case "matching":
        return exercise.pairs.every((p) => matches[p.de]);
      default:
        return text.trim().length > 0;
    }
  })();

  return (
    <Card className="flex flex-col gap-4">
      <p className="font-medium text-zinc-900">{tc(exercise.prompt)}</p>

      {/* ---- Inputs per kind ---- */}
      {exercise.kind === "multiple-choice" && (
        <>
          <p className="text-lg text-zinc-800">{exercise.question}</p>
          <div className="grid gap-2 sm:grid-cols-2">
            {exercise.options.map((opt, i) => (
              <button
                key={i}
                disabled={answered}
                onClick={() => setChoice(i)}
                className={cn(
                  "rounded-xl border px-4 py-2.5 text-left text-sm transition-colors",
                  answered && i === exercise.correctIndex && "border-green-400 bg-green-50 text-green-800",
                  answered && i === choice && i !== exercise.correctIndex && "border-red-400 bg-red-50 text-red-800",
                  !answered && choice === i && "border-indigo-500 bg-indigo-50 text-indigo-700",
                  !answered && choice !== i && "border-zinc-200 hover:border-zinc-300"
                )}
              >
                {opt}
              </button>
            ))}
          </div>
        </>
      )}

      {exercise.kind === "article-pick" && (
        <div className="flex flex-col gap-3">
          <p className="text-2xl font-semibold text-zinc-800">… {exercise.noun}</p>
          <div className="flex gap-2">
            {(["m", "f", "n"] as Gender[]).map((g) => (
              <button
                key={g}
                disabled={answered}
                onClick={() => setGender(g)}
                className={cn(
                  "flex-1 rounded-xl border px-4 py-3 text-lg font-medium transition-colors",
                  answered && g === exercise.correct && "border-green-400 bg-green-50 text-green-800",
                  answered && g === gender && g !== exercise.correct && "border-red-400 bg-red-50 text-red-800",
                  !answered && gender === g && "border-indigo-500 bg-indigo-50 text-indigo-700",
                  !answered && gender !== g && "border-zinc-200 hover:border-zinc-300"
                )}
              >
                {ARTICLE[g]}
              </button>
            ))}
          </div>
        </div>
      )}

      {(exercise.kind === "fill-blank" || exercise.kind === "conjugation" || exercise.kind === "translation") && (
        <div className="flex flex-col gap-2">
          {exercise.kind === "fill-blank" && (
            <p className="text-lg text-zinc-800">{exercise.template.replace("___", "______")}</p>
          )}
          {exercise.kind === "conjugation" && (
            <p className="text-lg text-zinc-800">
              <span className="text-zinc-400">{exercise.person.replace("erSieEs", "er/sie/es").replace("sieSie", "sie/Sie")}</span>{" "}
              ___ <span className="text-sm text-zinc-400">({exercise.infinitive})</span>
            </p>
          )}
          {exercise.kind === "translation" && (
            <p className="text-lg text-zinc-800">
              {exercise.direction === "de->native" ? exercise.sourceDe : exercise.sourceNative && tc(exercise.sourceNative)}
            </p>
          )}
          <input
            value={text}
            disabled={answered}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && !answered && canCheck && check()}
            autoFocus
            placeholder={t("yourAnswer")}
            className={cn(
              "rounded-xl border px-4 py-2.5 text-lg outline-none transition-colors",
              answered && correct && "border-green-400 bg-green-50",
              answered && !correct && "border-red-400 bg-red-50",
              !answered && "border-zinc-300 focus:border-indigo-500"
            )}
          />
        </div>
      )}

      {exercise.kind === "matching" && (
        <div className="flex flex-col gap-2">
          {exercise.pairs.map((p) => {
            const isRight = answered && matches[p.de] === tc(p.native);
            return (
              <div key={p.de} className="flex items-center gap-3">
                <span className="w-32 font-medium text-zinc-900">{p.de}</span>
                <select
                  disabled={answered}
                  value={matches[p.de] ?? ""}
                  onChange={(e) => setMatches((m) => ({ ...m, [p.de]: e.target.value }))}
                  className={cn(
                    "flex-1 rounded-lg border px-3 py-2 text-sm outline-none",
                    answered && isRight && "border-green-400 bg-green-50",
                    answered && !isRight && "border-red-400 bg-red-50",
                    !answered && "border-zinc-300 focus:border-indigo-500"
                  )}
                >
                  <option value="" disabled>
                    —
                  </option>
                  {shuffledNatives.map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </div>
            );
          })}
        </div>
      )}

      {/* ---- Feedback ---- */}
      {answered && (
        <div
          className={cn(
            "rounded-xl px-4 py-3 text-sm",
            correct ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
          )}
        >
          <p className="font-semibold">{correct ? `✓ ${t("correct")}` : `✗ ${t("incorrect")}`}</p>
          {!correct && "accepted" in exercise && (
            <p className="mt-0.5 text-zinc-600">
              {t("showAnswer")}: <span className="font-medium text-zinc-900">{exercise.accepted[0]}</span>
            </p>
          )}
          {!correct && exercise.kind === "article-pick" && (
            <p className="mt-0.5 text-zinc-600">
              {t("showAnswer")}: <span className="font-medium text-zinc-900">{ARTICLE[exercise.correct]} {exercise.noun}</span>
            </p>
          )}
          {exercise.explanation && (
            <p className="mt-1 text-zinc-600">
              <RichText text={tc(exercise.explanation)} />
            </p>
          )}
        </div>
      )}

      <div className="flex justify-end">
        {!answered ? (
          <Button onClick={check} disabled={!canCheck}>
            {t("check")}
          </Button>
        ) : (
          <Button onClick={onNext} variant="secondary">
            {isLast ? t("finish") : t("next")} →
          </Button>
        )}
      </div>
    </Card>
  );
}
