"use client";

import { useI18n } from "@/lib/i18n";
import { useStore } from "@/lib/store";
import { cn } from "@/lib/cn";
import type { Locale } from "@/lib/types";
import { Button, Card } from "@/components/ui";
import { Hydrated } from "@/components/Hydrated";

function Settings() {
  const { t } = useI18n();
  const locale = useStore((s) => s.nativeLanguage);
  const setLocale = useStore((s) => s.setNativeLanguage);
  const reset = useStore((s) => s.resetProgress);

  return (
    <div className="flex max-w-lg flex-col gap-6">
      <h1 className="text-2xl font-bold text-zinc-900">{t("nav_settings")}</h1>

      <Card className="flex flex-col gap-3">
        <h2 className="font-semibold text-zinc-900">{t("nativeLanguage")}</h2>
        <div className="flex gap-2">
          {(
            [
              ["ru", t("russian")],
              ["en", t("english")],
            ] as [Locale, string][]
          ).map(([l, label]) => (
            <button
              key={l}
              onClick={() => setLocale(l)}
              className={cn(
                "flex-1 rounded-xl border px-4 py-3 text-sm font-medium transition-colors",
                locale === l ? "border-indigo-500 bg-indigo-50 text-indigo-700" : "border-zinc-200 hover:border-zinc-300"
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </Card>

      <Card className="flex flex-col gap-3">
        <h2 className="font-semibold text-zinc-900">{t("resetProgress")}</h2>
        <Button
          variant="danger"
          onClick={() => {
            if (confirm(t("resetConfirm"))) reset();
          }}
        >
          {t("resetProgress")}
        </Button>
      </Card>
    </div>
  );
}

export default function SettingsPage() {
  return (
    <Hydrated fallback={<div className="text-zinc-400">…</div>}>
      <Settings />
    </Hydrated>
  );
}
