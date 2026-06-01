"use client";

import { useState } from "react";
import { CEFR_LEVELS, type CEFRLevel } from "@/lib/types";
import { grammarTopics } from "@/content";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/cn";
import { Badge } from "@/components/ui";
import { GrammarView } from "@/components/GrammarView";

const availableLevels = CEFR_LEVELS.filter((l) => grammarTopics.some((g) => g.level === l));

export default function GrammarPage() {
  const { t } = useI18n();
  const [level, setLevel] = useState<CEFRLevel>(availableLevels[0] ?? "A1");
  const topics = grammarTopics.filter((g) => g.level === level);

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-zinc-900">{t("nav_grammar")}</h1>

      <div className="flex gap-2">
        {availableLevels.map((l) => (
          <button
            key={l}
            onClick={() => setLevel(l)}
            className={cn(
              "rounded-lg px-3 py-1.5 text-sm font-semibold transition-colors",
              level === l ? "bg-zinc-900 text-white" : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
            )}
          >
            {l}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-5">
        {topics.map((topic) => (
          <GrammarView key={topic.id} topic={topic} />
        ))}
        {topics.length === 0 && (
          <Badge tone="zinc">—</Badge>
        )}
      </div>
    </div>
  );
}
