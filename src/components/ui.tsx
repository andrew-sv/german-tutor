import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm", className)}>
      {children}
    </div>
  );
}

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "danger";
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit";
};

export function Button({
  children,
  onClick,
  href,
  variant = "primary",
  disabled,
  className,
  type = "button",
}: ButtonProps) {
  const styles = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50",
    variant === "primary" && "bg-indigo-600 text-white hover:bg-indigo-700",
    variant === "secondary" && "bg-zinc-100 text-zinc-900 hover:bg-zinc-200",
    variant === "ghost" && "text-zinc-700 hover:bg-zinc-100",
    variant === "danger" && "bg-red-600 text-white hover:bg-red-700",
    className
  );
  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={styles}>
      {children}
    </button>
  );
}

export function Badge({
  children,
  tone = "zinc",
}: {
  children: ReactNode;
  tone?: "zinc" | "indigo" | "green" | "amber" | "red" | "blue";
}) {
  const tones: Record<string, string> = {
    zinc: "bg-zinc-100 text-zinc-700",
    indigo: "bg-indigo-100 text-indigo-700",
    green: "bg-green-100 text-green-700",
    amber: "bg-amber-100 text-amber-800",
    red: "bg-red-100 text-red-700",
    blue: "bg-blue-100 text-blue-700",
  };
  return (
    <span className={cn("inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium", tones[tone])}>
      {children}
    </span>
  );
}

export function ProgressBar({ value }: { value: number }) {
  const pct = Math.round(Math.max(0, Math.min(1, value)) * 100);
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-200">
      <div className="h-full rounded-full bg-indigo-500 transition-all" style={{ width: `${pct}%` }} />
    </div>
  );
}

/** Minimal inline-markdown renderer: supports `code` and **bold**. */
export function RichText({ text, className }: { text: string; className?: string }) {
  const nodes: ReactNode[] = [];
  const regex = /`([^`]+)`|\*\*([^*]+)\*\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let key = 0;
  while ((m = regex.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    if (m[1] !== undefined) nodes.push(<code key={key++}>{m[1]}</code>);
    else if (m[2] !== undefined) nodes.push(<strong key={key++}>{m[2]}</strong>);
    last = regex.lastIndex;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return <span className={cn("prose-de", className)}>{nodes}</span>;
}
