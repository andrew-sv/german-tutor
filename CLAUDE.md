# CLAUDE.md

Guidance for AI agents working in this repository. See `README.md` for the
user-facing overview.

## What this is

**Deutsch Tutor** — a local-only German learning web app (Next.js 16 App Router,
React 19, TypeScript, Tailwind v4, Zustand). It teaches German A1→B1/B2 with
themed lessons, grammar pages, a vocabulary trainer, and SM-2 spaced repetition.
All explanations/translations are bilingual (Russian + English). No backend;
progress is persisted to `localStorage`.

## Commands

- Package manager is **pnpm** (not npm/yarn).
- `pnpm exec tsc --noEmit` — type-check. Fast; use it to verify changes.
- `pnpm build` — production build (also type-checks). Use to verify before done.
- **Do not auto-start `pnpm dev`** — the maintainer runs the dev server himself.
  Verify with `tsc` / `build` instead.

## Architecture

- **Engine** (`src/lib/`): `types.ts` (domain model), `srs.ts` (SM-2-lite),
  `store.ts` (persisted Zustand), `i18n.ts` (RU/EN). Pure and content-agnostic.
- **Content** (`src/content/`): plain typed data. `index.ts` assembles it and is
  the single import surface (`getWord`, `getLesson`, `lessonsByLevel`, etc.).
- **UI** (`src/components/`, `src/app/`): client components. Pages that read the
  store are wrapped in `<Hydrated>` to avoid SSR/localStorage mismatches.

### Key conventions

- **Bilingual content** uses `LocalizedText = { ru, en }`. Resolve it with
  `tc(...)` from `useI18n()`; never hardcode a single language in content.
- **Exercises** are a tagged union (`Exercise`, discriminated by `kind`). To add
  a kind: extend the union in `types.ts` AND handle it in
  `components/ExerciseRunner.tsx` (the `evaluate`/`canCheck` switches + render).
- **Review items** are keyed `word:<id>` / `exercise:<id>` in the store.

## Vocabulary is two-tier (important)

- **core** — `src/content/vocabulary/<theme>.ts`. Rich words (full noun/verb/adj
  forms + examples). Power the guided **course** lessons.
- **extended** — `src/content/wordlist/<category>.ts` + the generated
  `wordlist/imported.ts`. Lighter entries; the full Goethe A1 list; used in the
  **Trainer**.
- `content/index.ts` merges: `words` = core, `allWords` = core + extended,
  **de-duplicated by lemma with core winning** (and imported winning within the
  extended pool — it's listed first in `wordlist/index.ts`).

A word's `theme` field = its category id. Category display metadata lives in
`categories.ts`; the subset that become course lessons is in `themes.ts`.

## How to extend content

- **Add a rich word** → append to the matching `vocabulary/<theme>.ts`.
- **Bulk import the official list** → edit `data/goethe-a1.tsv`, then
  `node scripts/recategorize.mjs` (optional, POS/lemma category fixes) and
  `node scripts/import-wortliste.mjs` (regenerates `wordlist/imported.ts`).
  Never hand-edit `imported.ts` — it's generated.
- **Add a grammar topic** → object in `grammar.ts` (bilingual explanation +
  `GrammarTable[]` + examples). Wire it into a lesson in `lessons.ts`.
- **Add exercises** → `exercises.ts` (hand-authored) or `generate.ts`
  (auto-derived from a theme's words). Lessons reference exercises by id.
- After content changes, run `pnpm exec tsc --noEmit` — the typed data catches
  bad ids/shapes.

## Gotchas

- The Goethe **PDFs in `data/` are gitignored** (copyrighted). `goethe-a1.tsv`
  is the tracked import source.
- German correctness matters: nouns need correct gender + plural; this is a
  language tutor, so a wrong `der/die/das` actively teaches a mistake. Prefer the
  authoritative Wortliste over guessing.
- Lesson `order` interleaves themed-vocab and grammar lessons across a level.

@AGENTS.md
