// Core domain model for the German tutor.
// All learner-facing explanations/translations carry the native language so it
// can be switched at any time with zero extra content lookups.

export type Locale = "ru" | "en" | "uk";

/**
 * A piece of text in the supported native languages. `ru` and `en` are always
 * present; `uk` (Ukrainian) is optional and falls back to `ru` then `en` when
 * absent (see i18n `pick`). Translate content into `uk` progressively.
 */
export interface LocalizedText {
  ru: string;
  en: string;
  uk?: string;
}

export type CEFRLevel = "A1" | "A2" | "B1" | "B2";

export const CEFR_LEVELS: CEFRLevel[] = ["A1", "A2", "B1", "B2"];

/** A German example sentence with its native-language translation. */
export interface Example {
  de: string;
  translation: LocalizedText;
}

// ---------------------------------------------------------------------------
// Grammar
// ---------------------------------------------------------------------------

/** A reference table, e.g. article declension or verb conjugation. */
export interface GrammarTable {
  caption?: LocalizedText;
  /** Column headers. First column is usually a row label (e.g. "Nominativ"). */
  columns: string[];
  /** Rows of cells. Cell text is German (kept language-neutral on purpose). */
  rows: string[][];
  /** Optional per-cell highlight, keyed "rowIndex,colIndex" -> intent. */
  highlight?: Record<string, "key" | "irregular">;
}

export interface GrammarTopic {
  id: string;
  level: CEFRLevel;
  title: LocalizedText;
  /** One-line summary used in lists. */
  summary: LocalizedText;
  /** Markdown explanation; may contain inline German in `code` spans. */
  explanation: LocalizedText;
  tables: GrammarTable[];
  examples: Example[];
  /** Free-form tags for grouping (e.g. "cases", "verbs"). */
  tags?: string[];
}

// ---------------------------------------------------------------------------
// Vocabulary
// ---------------------------------------------------------------------------

export type PartOfSpeech =
  | "noun"
  | "verb"
  | "adjective"
  | "adverb"
  | "preposition"
  | "pronoun"
  | "conjunction"
  | "numeral"
  | "phrase";

export type Gender = "m" | "f" | "n"; // der / die / das

/** Present-tense conjugation for the six persons. */
export interface VerbConjugation {
  ich: string;
  du: string;
  erSieEs: string;
  wir: string;
  ihr: string;
  sieSie: string;
}

export interface NounForms {
  gender: Gender;
  /** Plural form including article-less stem, e.g. "Häuser". */
  plural?: string;
  genitiveSingular?: string;
}

export interface VerbForms {
  praesens: VerbConjugation;
  partizipII: string;
  praeteritum3sg?: string; // er/sie/es form, e.g. "ging"
  auxiliary: "haben" | "sein";
  separable?: boolean;
  irregular?: boolean;
}

export interface AdjectiveForms {
  comparative?: string;
  superlative?: string; // "am ...sten" form
}

export interface Word {
  id: string;
  level: CEFRLevel;
  lemma: string; // dictionary form, German
  pos: PartOfSpeech;
  translation: LocalizedText;
  examples: Example[];
  noun?: NounForms;
  verb?: VerbForms;
  adjective?: AdjectiveForms;
  /** Optional usage / false-friend note. */
  note?: LocalizedText;
  /** Theme/unit this word belongs to (see VocabTheme / category). */
  theme?: string;
  /**
   * "core" = taught in the guided course with full forms & examples.
   * "extended" = part of the full Goethe A1 wordlist, drilled in the trainer.
   * Defaults to "core" when omitted.
   */
  tier?: "core" | "extended";
  tags?: string[];
}

/** Display/category metadata for grouping vocabulary (course themes + trainer-only categories). */
export interface Category {
  id: string;
  level: CEFRLevel;
  icon: string;
  title: LocalizedText;
}

/** A thematic vocabulary unit (e.g. "family", "food") used to group words into lessons. */
export interface VocabTheme {
  id: string;
  level: CEFRLevel;
  title: LocalizedText;
  icon: string; // emoji shown in the curriculum
  /** Position in the level's lesson sequence. */
  order: number;
  /** Optional grammar topic taught alongside this vocabulary. */
  grammarTopicId?: string;
}

/** Convenience: the article string for a noun gender. */
export const ARTICLE: Record<Gender, string> = {
  m: "der",
  f: "die",
  n: "das",
};

// ---------------------------------------------------------------------------
// Exercises (tagged union by `kind`)
// ---------------------------------------------------------------------------

interface ExerciseBase {
  id: string;
  level: CEFRLevel;
  /** Prompt shown to the learner. */
  prompt: LocalizedText;
  /** Shown after answering, regardless of correctness. */
  explanation?: LocalizedText;
  /** Optional links back to source material for review. */
  grammarTopicId?: string;
  wordId?: string;
}

export interface MultipleChoiceExercise extends ExerciseBase {
  kind: "multiple-choice";
  /** The sentence/question; may contain "___" as a blank marker. */
  question: string;
  options: string[];
  correctIndex: number;
}

export interface ArticlePickExercise extends ExerciseBase {
  kind: "article-pick";
  /** Noun without article, e.g. "Tisch". */
  noun: string;
  correct: Gender; // der/die/das
}

export interface FillBlankExercise extends ExerciseBase {
  kind: "fill-blank";
  /** Sentence template with exactly one "___". */
  template: string;
  /** Accepted answers (case-insensitive, trimmed). First is canonical. */
  accepted: string[];
}

export interface TranslationExercise extends ExerciseBase {
  kind: "translation";
  direction: "de->native" | "native->de";
  /** Source text. For native->de it's a LocalizedText; for de->native a string. */
  sourceDe?: string;
  sourceNative?: LocalizedText;
  /** Accepted target answers. For de->native, give RU+EN variants. */
  accepted: string[];
}

export interface ConjugationExercise extends ExerciseBase {
  kind: "conjugation";
  infinitive: string;
  person: keyof VerbConjugation;
  accepted: string[];
}

export interface MatchingExercise extends ExerciseBase {
  kind: "matching";
  /** Pairs to match: German term <-> native translation. */
  pairs: { de: string; native: LocalizedText }[];
}

export type Exercise =
  | MultipleChoiceExercise
  | ArticlePickExercise
  | FillBlankExercise
  | TranslationExercise
  | ConjugationExercise
  | MatchingExercise;

export type ExerciseKind = Exercise["kind"];

// ---------------------------------------------------------------------------
// Lessons & curriculum
// ---------------------------------------------------------------------------

/** Ordered steps that make up a lesson. */
export type LessonStep =
  | { type: "grammar"; topicId: string }
  | { type: "vocab"; wordIds: string[] }
  | { type: "exercise"; exerciseId: string };

export interface Lesson {
  id: string;
  level: CEFRLevel;
  /** Order within the level. */
  order: number;
  title: LocalizedText;
  goal: LocalizedText;
  steps: LessonStep[];
}
