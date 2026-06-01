"use client";

import { useI18n } from "@/lib/i18n";
import { useStore } from "@/lib/store";
import { dueItems } from "@/lib/srs";
import { orderedLessons } from "@/content";
import { Card, Button, ProgressBar, Badge } from "@/components/ui";
import { Hydrated } from "@/components/Hydrated";

function Stat({ label, value, hint }: { label: string; value: string | number; hint?: string }) {
  return (
    <Card className="flex flex-col gap-1">
      <span className="text-3xl font-bold tabular-nums text-zinc-900">{value}</span>
      <span className="text-sm font-medium text-zinc-500">{label}</span>
      {hint && <span className="text-xs text-zinc-400">{hint}</span>}
    </Card>
  );
}

function Dashboard() {
  const { t, tc } = useI18n();
  const reviewItems = useStore((s) => s.reviewItems);
  const completed = useStore((s) => s.completedLessons);
  const streak = useStore((s) => s.streak);

  const lessons = orderedLessons();
  const due = dueItems(Object.values(reviewItems)).length;
  const wordsLearned = Object.keys(reviewItems).filter((k) => k.startsWith("word:")).length;
  const nextLesson = lessons.find((l) => !completed.includes(l.id)) ?? lessons[lessons.length - 1];
  const progress = lessons.length ? completed.length / lessons.length : 0;

  return (
    <div className="flex flex-col gap-8">
      <section>
        <h1 className="text-3xl font-bold text-zinc-900">{t("appName")}</h1>
        <p className="mt-1 text-zinc-500">{t("tagline")}</p>
      </section>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <Stat label={t("streak")} value={`${streak.count} 🔥`} />
        <Stat label={t("dueReviews")} value={due} />
        <Stat label={t("lessonsDone")} value={`${completed.length}/${lessons.length}`} />
        <Stat label={t("wordsLearned")} value={wordsLearned} />
      </div>

      <Card className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-zinc-900">{t("nav_learn")}</h2>
          <Badge tone="indigo">{nextLesson.level}</Badge>
        </div>
        <div>
          <p className="font-medium text-zinc-900">{tc(nextLesson.title)}</p>
          <p className="text-sm text-zinc-500">{tc(nextLesson.goal)}</p>
        </div>
        <ProgressBar value={progress} />
        <div className="flex gap-3">
          <Button href={`/learn/${nextLesson.id}`}>
            {completed.length ? t("continue") : t("start")} →
          </Button>
          {due > 0 && (
            <Button href="/practice" variant="secondary">
              {t("nav_practice")} ({due})
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}

export default function HomePage() {
  return (
    <Hydrated fallback={<div className="text-zinc-400">…</div>}>
      <Dashboard />
    </Hydrated>
  );
}
