"use client";

import { CEFR_LEVELS } from "@/lib/types";
import { lessonsByLevel } from "@/content";
import { useI18n } from "@/lib/i18n";
import { useStore } from "@/lib/store";
import { Badge, Button, Card } from "@/components/ui";
import { Hydrated } from "@/components/Hydrated";

function Curriculum() {
  const { t, tc } = useI18n();
  const completed = useStore((s) => s.completedLessons);

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-bold text-zinc-900">{t("nav_learn")}</h1>
      {CEFR_LEVELS.map((level) => {
        const lessons = lessonsByLevel(level);
        if (lessons.length === 0) {
          return (
            <section key={level} className="opacity-50">
              <div className="mb-2 flex items-center gap-2">
                <Badge tone="zinc">{level}</Badge>
                <span className="text-sm text-zinc-400">{tc({ ru: "скоро", en: "coming soon" })}</span>
              </div>
            </section>
          );
        }
        return (
          <section key={level}>
            <div className="mb-3 flex items-center gap-2">
              <Badge tone="indigo">{level}</Badge>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {lessons.map((l) => {
                const isDone = completed.includes(l.id);
                return (
                  <Card key={l.id} className="flex flex-col gap-3">
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-semibold text-zinc-900">{tc(l.title)}</p>
                      {isDone && <Badge tone="green">✓</Badge>}
                    </div>
                    <p className="flex-1 text-sm text-zinc-500">{tc(l.goal)}</p>
                    <Button href={`/learn/${l.id}`} variant={isDone ? "secondary" : "primary"}>
                      {isDone ? t("continue") : t("start")} →
                    </Button>
                  </Card>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default function LearnPage() {
  return (
    <Hydrated fallback={<div className="text-zinc-400">…</div>}>
      <Curriculum />
    </Hydrated>
  );
}
