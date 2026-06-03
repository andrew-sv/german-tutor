"use client";

import { useMemo, useState } from "react";
import { CEFR_LEVELS, type CEFRLevel, type PartOfSpeech } from "@/lib/types";
import { allWords, categories } from "@/content";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/cn";
import { WordCard } from "@/components/WordCard";

const LEVELS = ["all", ...CEFR_LEVELS.filter((l) => allWords.some((w) => w.level === l))] as const;
const POS_FILTERS: { value: PartOfSpeech | "all"; ru: string; en: string; uk: string }[] = [
  { value: "all", ru: "Все", en: "All", uk: "Усі" },
  { value: "noun", ru: "Сущ.", en: "Nouns", uk: "Ім." },
  { value: "verb", ru: "Глаг.", en: "Verbs", uk: "Дієсл." },
  { value: "adjective", ru: "Прил.", en: "Adjectives", uk: "Прикм." },
];

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-lg px-3 py-1.5 text-sm font-medium transition-colors",
        active ? "bg-zinc-900 text-white" : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
      )}
    >
      {children}
    </button>
  );
}

export default function VocabularyPage() {
  const { t, tc } = useI18n();
  const [level, setLevel] = useState<CEFRLevel | "all">("all");
  const [pos, setPos] = useState<PartOfSpeech | "all">("all");
  const [theme, setTheme] = useState<string | "all">("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(
    () =>
      allWords.filter(
        (w) =>
          (level === "all" || w.level === level) &&
          (pos === "all" || w.pos === pos) &&
          (theme === "all" || w.theme === theme) &&
          (query.trim() === "" ||
            w.lemma.toLowerCase().includes(query.toLowerCase()) ||
            tc(w.translation).toLowerCase().includes(query.toLowerCase()))
      ),
    [level, pos, theme, query, tc]
  );

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl font-bold text-zinc-900">{t("nav_vocab")}</h1>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="🔍 Tisch / стол / table"
        className="rounded-xl border border-zinc-300 px-4 py-2.5 outline-none focus:border-indigo-500"
      />

      <div className="flex flex-wrap items-center gap-2">
        {LEVELS.map((l) => (
          <Chip key={l} active={level === l} onClick={() => setLevel(l as CEFRLevel | "all")}>
            {l === "all" ? tc({ ru: "Все уровни", en: "All levels", uk: "Усі рівні" }) : l}
          </Chip>
        ))}
        <span className="mx-1 text-zinc-300">|</span>
        {POS_FILTERS.map((p) => (
          <Chip key={p.value} active={pos === p.value} onClick={() => setPos(p.value)}>
            {tc(p)}
          </Chip>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <Chip active={theme === "all"} onClick={() => setTheme("all")}>
          {tc({ ru: "Все темы", en: "All themes", uk: "Усі теми" })}
        </Chip>
        {categories.map((c) => (
          <Chip key={c.id} active={theme === c.id} onClick={() => setTheme(c.id)}>
            {c.icon} {tc(c.title)}
          </Chip>
        ))}
      </div>

      <p className="text-sm text-zinc-400">{filtered.length}</p>

      <div className="grid gap-4 sm:grid-cols-2">
        {filtered.map((w) => (
          <WordCard key={w.id} word={w} />
        ))}
      </div>
    </div>
  );
}
