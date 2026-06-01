// Lightweight SM-2-style spaced-repetition scheduler.
// One ReviewItem tracks the learner's memory of a single reviewable thing
// (a word or an exercise). The /practice session pulls everything currently due.

export type Grade = "again" | "hard" | "good" | "easy";

export interface ReviewItem {
  /** "word:<id>" or "exercise:<id>". */
  id: string;
  ease: number; // ease factor, starts at 2.5
  intervalDays: number; // current interval
  reps: number; // successful reps in a row
  lapses: number; // times forgotten
  /** Epoch ms when this item is next due. */
  due: number;
  lastReviewed?: number;
}

const DAY = 24 * 60 * 60 * 1000;
const MIN_EASE = 1.3;

export function newReviewItem(id: string, now = Date.now()): ReviewItem {
  return { id, ease: 2.5, intervalDays: 0, reps: 0, lapses: 0, due: now };
}

/** Apply a grade and return the updated item (pure). */
export function review(item: ReviewItem, grade: Grade, now = Date.now()): ReviewItem {
  let { ease, intervalDays, reps, lapses } = item;

  if (grade === "again") {
    reps = 0;
    lapses += 1;
    ease = Math.max(MIN_EASE, ease - 0.2);
    intervalDays = 0; // relearn now/today
  } else {
    if (grade === "hard") ease = Math.max(MIN_EASE, ease - 0.15);
    if (grade === "easy") ease += 0.15;

    if (reps === 0) {
      intervalDays = grade === "easy" ? 3 : 1;
    } else if (reps === 1) {
      intervalDays = grade === "easy" ? 6 : 3;
    } else {
      const mult = grade === "hard" ? 1.2 : ease;
      intervalDays = Math.round(intervalDays * mult);
    }
    reps += 1;
  }

  const due = grade === "again" ? now + 60 * 1000 : now + intervalDays * DAY;
  return { ...item, ease, intervalDays, reps, lapses, due, lastReviewed: now };
}

export function isDue(item: ReviewItem, now = Date.now()): boolean {
  return item.due <= now;
}

/** Items due now, soonest first. */
export function dueItems(items: ReviewItem[], now = Date.now()): ReviewItem[] {
  return items.filter((i) => isDue(i, now)).sort((a, b) => a.due - b.due);
}

/** Rough mastery 0..1 from reps & ease, for progress display. */
export function mastery(item: ReviewItem): number {
  const fromReps = Math.min(item.reps / 5, 1);
  const fromEase = (item.ease - MIN_EASE) / (3.0 - MIN_EASE);
  return Math.max(0, Math.min(1, 0.6 * fromReps + 0.4 * fromEase));
}
