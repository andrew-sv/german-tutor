import type { CEFRLevel, Category, Exercise, GrammarTopic, Lesson, VocabTheme, Word } from "@/lib/types";
import { grammarTopics } from "./grammar";
import { words as coreWords, wordsByTheme } from "./vocabulary";
import { extendedWords } from "./wordlist";
import { exercises as handExercises } from "./exercises";
import { grammarLessons } from "./lessons";
import { themes, getTheme } from "./themes";
import { categories, getCategory, usedCategories } from "./categories";
import { themeExercises, buildThemeLesson } from "./generate";

// --- Vocabulary tiers ----------------------------------------------------
// Course (core) words are rich and drive lessons. Extended words fill out the
// full Goethe A1 list for the trainer; dedupe by lemma so a core word is never
// shadowed by a lighter extended entry.
const coreLemmas = new Set(coreWords.map((w) => w.lemma));
const seenExtended = new Set<string>();
const extendedUnique = extendedWords.filter((w) => {
  // Drop anything already taught as a core word, and de-dupe within the
  // extended pool (hand-authored + imported) by lemma.
  if (coreLemmas.has(w.lemma) || seenExtended.has(w.lemma)) return false;
  seenExtended.add(w.lemma);
  return true;
});

/** Course vocabulary only (full forms + examples). */
export const words: Word[] = coreWords;
/** Full A1 vocabulary: course words + the extended Goethe A1 list. */
export const allWords: Word[] = [...coreWords, ...extendedUnique];

// --- Assemble generated content from course themes -----------------------
const generatedExercises: Exercise[] = themes.flatMap((t) => themeExercises(t, wordsByTheme(t.id)));
const themedLessons: Lesson[] = themes.map((t) => {
  const tw = wordsByTheme(t.id);
  return buildThemeLesson(t, tw, themeExercises(t, tw));
});

// --- Public collections --------------------------------------------------
export const exercises: Exercise[] = [...handExercises, ...generatedExercises];
export const lessons: Lesson[] = [...grammarLessons, ...themedLessons];
export { grammarTopics, themes, categories };

// --- Lookup maps ---------------------------------------------------------
const grammarById = new Map(grammarTopics.map((g) => [g.id, g]));
const wordById = new Map(allWords.map((w) => [w.id, w]));
const exerciseById = new Map(exercises.map((e) => [e.id, e]));
const lessonById = new Map(lessons.map((l) => [l.id, l]));

export const getGrammarTopic = (id: string): GrammarTopic | undefined => grammarById.get(id);
export const getWord = (id: string): Word | undefined => wordById.get(id);
export const getExercise = (id: string): Exercise | undefined => exerciseById.get(id);
export const getLesson = (id: string): Lesson | undefined => lessonById.get(id);
export { getTheme, getCategory, wordsByTheme };

/** All words (both tiers) in a category. */
export const wordsInCategory = (categoryId: string): Word[] =>
  allWords.filter((w) => w.theme === categoryId);

/** Categories that contain at least one word. */
export const trainerCategories = (): Category[] => usedCategories(allWords);

/** Lessons of a level, in curriculum order. */
export const lessonsByLevel = (level: CEFRLevel): Lesson[] =>
  lessons.filter((l) => l.level === level).sort((a, b) => a.order - b.order);

/** All lessons across levels, in curriculum order. */
export const orderedLessons = (): Lesson[] =>
  [...lessons].sort((a, b) => a.level.localeCompare(b.level) || a.order - b.order);

/** Theme metadata for a level. */
export const themesByLevel = (level: CEFRLevel): VocabTheme[] =>
  themes.filter((t) => t.level === level).sort((a, b) => a.order - b.order);
