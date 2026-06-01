# Deutsch Tutor 🇩🇪

A self-paced web app to learn German from zero toward B1/B2, with a tight
**teach → quiz** loop and spaced repetition. Explanations and translations are
switchable between **Russian and English**. Everything runs locally — no
backend, no accounts; progress lives in the browser.

The A1 level is complete: the full Goethe-Zertifikat A1 vocabulary (~800 words),
17 grammar topics, and 30 lessons.

## Features

- **Course** — themed vocabulary + grammar lessons that walk you through
  *learn the rule → see examples → drill it*, with auto-generated exercises.
- **Grammar** — reference pages with declension/conjugation tables and examples
  (articles → cases → Perfekt, telling time, writing numbers & dates).
- **Vocabulary** — searchable, filterable by level / part of speech / category,
  showing every form (article + plural, full conjugation, comparatives).
- **Trainer** — flashcard drills over the full wordlist, filterable by level and
  category, feeding spaced repetition.
- **Practice** — an SM-2-style SRS review session of everything currently due.
- **Bilingual** — one toggle switches all explanations between RU and EN.

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router) · React 19 · TypeScript
- Tailwind CSS v4
- [Zustand](https://github.com/pmndrs/zustand) persisted to `localStorage`
- No server, no database — fully client-side and statically deployable

## Getting started

This project uses **pnpm**.

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

Other scripts:

```bash
pnpm build               # production build (also runs the TS type-check)
pnpm exec tsc --noEmit   # type-check only
pnpm lint
```

> Accessing the dev server over a LAN IP? It's allowlisted in
> `next.config.ts` (`allowedDevOrigins`) so HMR works off-localhost.

## Project structure

```
src/
  app/                 # routes: /, /learn, /grammar, /vocabulary, /trainer, /practice, /settings
  components/          # UI primitives, Nav, GrammarView, WordCard, Flashcard, ExerciseRunner
  lib/
    types.ts           # domain model (LocalizedText, Word, Exercise union, Lesson, …)
    srs.ts             # SM-2-lite spaced-repetition scheduler
    store.ts           # Zustand store persisted to localStorage
    i18n.ts            # RU/EN UI strings + content resolver
  content/
    vocabulary/        # core words (rich: full forms + examples) used in lessons
    wordlist/          # extended Goethe A1 wordlist (lighter; trainer) + imported.ts
    grammar.ts         # grammar topics (tables + examples)
    exercises.ts       # hand-authored exercises
    generate.ts        # derives exercises + lessons from theme word lists
    lessons.ts         # grammar lessons (themed lessons are generated)
    themes.ts          # course themes  ·  categories.ts  # all category metadata
    index.ts           # merges everything; lookup maps; public API
scripts/
  import-wortliste.mjs # data/goethe-a1.tsv  →  src/content/wordlist/imported.ts
  recategorize.mjs     # POS-aware category fixes for the TSV
data/                  # import sources (Goethe TSV; PDFs are gitignored)
```

## Content model

Vocabulary has two tiers:

- **core** (`src/content/vocabulary/<theme>.ts`) — rich words with full forms and
  example sentences. These power the guided **course** lessons.
- **extended** (`src/content/wordlist/<category>.ts` + generated `imported.ts`) —
  the rest of the Goethe A1 list in compact form, drilled in the **Trainer**.

`content/index.ts` merges them: `words` = core; `allWords` = core + extended
(de-duplicated by lemma, core wins).

### Growing the vocabulary

- Add a rich, lesson-worthy word → append to the right `vocabulary/<theme>.ts`.
- Bulk-import the official list → edit `data/goethe-a1.tsv`, then:
  ```bash
  node scripts/recategorize.mjs    # optional: fix categories by POS/lemma
  node scripts/import-wortliste.mjs
  ```

### Adding grammar / lessons

- A grammar topic is a data object in `src/content/grammar.ts` (title, bilingual
  explanation, tables, examples).
- A lesson is a sequence of `grammar` / `vocab` / `exercise` steps in
  `src/content/lessons.ts`; themed vocab lessons are generated in `generate.ts`.

## Data sources

The Goethe-Institut Wortlisten (PDFs in `data/`) are **gitignored** — they are
copyrighted import sources used to build `data/goethe-a1.tsv`; the app itself
never loads them at runtime.

## Roadmap

- A2 → B1 → B2 levels (the content pipeline scales directly into them)
- Audio / text-to-speech pronunciation
- More exercise types (listening, sentence ordering)
