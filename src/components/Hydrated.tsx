"use client";

import type { ReactNode } from "react";
import { useStore } from "@/lib/store";

/**
 * Renders children only after the persisted store has rehydrated from
 * localStorage, avoiding server/client markup mismatches.
 */
export function Hydrated({ children, fallback = null }: { children: ReactNode; fallback?: ReactNode }) {
  const hasHydrated = useStore((s) => s.hasHydrated);
  if (!hasHydrated) return <>{fallback}</>;
  return <>{children}</>;
}
