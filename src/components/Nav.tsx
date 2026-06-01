"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { useI18n } from "@/lib/i18n";
import { useStore } from "@/lib/store";
import type { Locale } from "@/lib/types";

const LINKS = [
  { href: "/", key: "nav_home" },
  { href: "/learn", key: "nav_learn" },
  { href: "/grammar", key: "nav_grammar" },
  { href: "/vocabulary", key: "nav_vocab" },
  { href: "/trainer", key: "nav_trainer" },
  { href: "/practice", key: "nav_practice" },
  { href: "/settings", key: "nav_settings" },
] as const;

export function Nav() {
  const pathname = usePathname();
  const { t } = useI18n();
  const locale = useStore((s) => s.nativeLanguage);
  const setLocale = useStore((s) => s.setNativeLanguage);

  return (
    <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center gap-1 px-4 py-3">
        <Link href="/" className="mr-3 flex items-center gap-2 font-bold text-zinc-900">
          <span className="text-xl">🇩🇪</span>
          <span className="hidden sm:inline">{t("appName")}</span>
        </Link>
        <div className="flex flex-1 items-center gap-1 overflow-x-auto">
          {LINKS.slice(1).map((l) => {
            const active = pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href));
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-medium transition-colors",
                  active ? "bg-indigo-50 text-indigo-700" : "text-zinc-600 hover:bg-zinc-100"
                )}
              >
                {t(l.key)}
              </Link>
            );
          })}
        </div>
        <div className="ml-2 flex items-center rounded-lg border border-zinc-200 p-0.5 text-xs font-semibold">
          {(["ru", "en"] as Locale[]).map((l) => (
            <button
              key={l}
              onClick={() => setLocale(l)}
              className={cn(
                "rounded-md px-2 py-1 uppercase transition-colors",
                locale === l ? "bg-zinc-900 text-white" : "text-zinc-500 hover:text-zinc-900"
              )}
            >
              {l}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}
