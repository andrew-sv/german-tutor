// Derives practice exercises and a lesson from a theme's word list, so adding
// vocabulary automatically yields quizzes — no hand-authoring per word.

import {
  ARTICLE,
  type Exercise,
  type Lesson,
  type LessonStep,
  type VerbConjugation,
  type VocabTheme,
  type Word,
} from "@/lib/types";

// Persons cycled through so conjugation drills aren't all "ich".
const PERSONS: (keyof VerbConjugation)[] = ["ich", "du", "erSieEs", "wir", "ihr", "sieSie"];
const PERSON_LABEL: Record<keyof VerbConjugation, string> = {
  ich: "ich",
  du: "du",
  erSieEs: "er/sie/es",
  wir: "wir",
  ihr: "ihr",
  sieSie: "sie/Sie",
};

/** Deterministic person per verb (stable across renders) from the word id. */
function personFor(id: string): keyof VerbConjugation {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
  return PERSONS[h % PERSONS.length];
}

/** German display form: nouns get their article, everything else the lemma. */
function display(word: Word): string {
  return word.pos === "noun" && word.noun ? `${ARTICLE[word.noun.gender]} ${word.lemma}` : word.lemma;
}

/** der/die/das picker for a noun. */
function articlePickFor(word: Word): Exercise | null {
  if (word.pos !== "noun" || !word.noun) return null;
  return {
    id: `gx-art-${word.id}`,
    level: word.level,
    kind: "article-pick",
    prompt: { ru: `Какой артикль у слова «${word.lemma}»?`, en: `Which article does “${word.lemma}” take?` },
    noun: word.lemma,
    correct: word.noun.gender,
    wordId: word.id,
    grammarTopicId: "a1-articles",
    explanation: {
      ru: `${ARTICLE[word.noun.gender]} ${word.lemma}`,
      en: `${ARTICLE[word.noun.gender]} ${word.lemma}`,
    },
  };
}

/** Conjugation drill for a verb — the person varies per verb (not always ich). */
function conjugationFor(word: Word): Exercise | null {
  if (word.pos !== "verb" || !word.verb) return null;
  const person = personFor(word.id);
  const label = PERSON_LABEL[person];
  return {
    id: `gx-conj-${word.id}`,
    level: word.level,
    kind: "conjugation",
    prompt: { ru: `Проспрягайте «${word.lemma}» для «${label}».`, en: `Conjugate “${word.lemma}” for “${label}”.` },
    infinitive: word.lemma,
    person,
    accepted: [word.verb.praesens[person]],
    wordId: word.id,
    grammarTopicId: "a1-present-regular",
  };
}

/** Recall drill: type the German for a native prompt. */
function translationFor(word: Word): Exercise {
  return {
    id: `gx-trans-${word.id}`,
    level: word.level,
    kind: "translation",
    direction: "native->de",
    prompt: { ru: "Переведите на немецкий.", en: "Translate into German." },
    sourceNative: word.translation,
    accepted: [display(word), word.lemma],
    wordId: word.id,
  };
}

/** One matching block per theme (first up to 6 words). */
function matchingFor(theme: VocabTheme, themeWords: Word[]): Exercise | null {
  const pick = themeWords.slice(0, 6);
  if (pick.length < 2) return null;
  return {
    id: `gx-match-${theme.id}`,
    level: theme.level,
    kind: "matching",
    prompt: { ru: "Сопоставьте слова и перевод.", en: "Match the words to their translations." },
    pairs: pick.map((w) => ({ de: display(w), native: w.translation })),
  };
}

/** All generated exercises for a theme. */
export function themeExercises(theme: VocabTheme, themeWords: Word[]): Exercise[] {
  const out: Exercise[] = [];
  for (const w of themeWords) {
    const a = articlePickFor(w);
    if (a) out.push(a);
    const c = conjugationFor(w);
    if (c) out.push(c);
    // Words without a noun/verb form get a recall (translation) drill.
    if (!a && !c) out.push(translationFor(w));
  }
  const m = matchingFor(theme, themeWords);
  if (m) out.push(m);
  return out;
}

/** A vocabulary lesson: learn the words, then drill the generated exercises. */
export function buildThemeLesson(theme: VocabTheme, themeWords: Word[], exercises: Exercise[]): Lesson {
  const steps: LessonStep[] = [
    { type: "vocab", wordIds: themeWords.map((w) => w.id) },
    ...exercises.map((e): LessonStep => ({ type: "exercise", exerciseId: e.id })),
  ];
  return {
    id: `a1-${theme.id}`,
    level: theme.level,
    order: theme.order,
    title: { ru: `${theme.icon} ${theme.title.ru}`, en: `${theme.icon} ${theme.title.en}` },
    goal: {
      ru: `Выучить ${themeWords.length} слов по теме и закрепить их.`,
      en: `Learn ${themeWords.length} themed words and lock them in.`,
    },
    steps,
  };
}
