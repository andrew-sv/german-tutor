"use client";

import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/cn";
import type { GrammarTable, GrammarTopic } from "@/lib/types";
import { Badge, Card, RichText } from "./ui";

function TableView({ table }: { table: GrammarTable }) {
  const { tc } = useI18n();
  return (
    <figure className="overflow-hidden rounded-xl border border-zinc-200">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-zinc-50 text-left">
            {table.columns.map((c, i) => (
              <th key={i} className="border-b border-zinc-200 px-3 py-2 font-semibold text-zinc-600">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, r) => (
            <tr key={r} className="even:bg-zinc-50/50">
              {row.map((cell, c) => {
                const hl = table.highlight?.[`${r},${c}`];
                return (
                  <td
                    key={c}
                    className={cn(
                      "border-t border-zinc-100 px-3 py-2",
                      c === 0 && "font-medium text-zinc-500",
                      hl === "key" && "bg-indigo-50 font-semibold text-indigo-700",
                      hl === "irregular" && "bg-amber-50 font-semibold text-amber-800"
                    )}
                  >
                    {cell}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      {table.caption && (
        <figcaption className="bg-zinc-50 px-3 py-1.5 text-xs text-zinc-500">{tc(table.caption)}</figcaption>
      )}
    </figure>
  );
}

export function GrammarView({ topic }: { topic: GrammarTopic }) {
  const { t, tc } = useI18n();
  return (
    <Card className="flex flex-col gap-4">
      <div className="flex items-start justify-between gap-3">
        <h2 className="text-xl font-bold text-zinc-900">{tc(topic.title)}</h2>
        <Badge tone="indigo">{topic.level}</Badge>
      </div>

      <div className="space-y-2 leading-relaxed text-zinc-700">
        {tc(topic.explanation)
          .split("\n")
          .map((para, i) => (
            <p key={i}>
              <RichText text={para} />
            </p>
          ))}
      </div>

      <div className="flex flex-col gap-4">
        {topic.tables.map((tbl, i) => (
          <TableView key={i} table={tbl} />
        ))}
      </div>

      {topic.examples.length > 0 && (
        <div>
          <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-zinc-400">
            {t("examples")}
          </h3>
          <ul className="flex flex-col gap-1.5">
            {topic.examples.map((ex, i) => (
              <li key={i} className="rounded-lg bg-zinc-50 px-3 py-2 text-sm">
                <span className="font-medium text-zinc-900">{ex.de}</span>
                <span className="text-zinc-400"> — </span>
                <span className="text-zinc-600">{tc(ex.translation)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Card>
  );
}
