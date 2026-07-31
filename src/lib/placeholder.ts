/**
 * Placeholder-aware rendering.
 *
 * Unfilled copy is marked in messages/*.json as `[REPLACE: …]` (English),
 * `[REMPLACER : …]` (French), `[RANPLASE: …]` (Creole), `[—]` (a missing number),
 * or `[DATE]`. Those markers are deliberately kept in the message files — they
 * are the prompt the team sees in the TinaCMS admin — but they must never reach
 * a visitor.
 *
 * So the pages ask these helpers instead of trusting the string: a block that
 * has no real content hides itself, and reappears on its own the moment someone
 * fills the value in /admin. Nothing needs re-coding when content arrives.
 */

const MARKERS = /\[(?:REPLACE|REMPLACER|RANPLASE)\b|\[—\]|\[DATE\]/i;

/** True when this string is an unfilled placeholder rather than real content. */
export function isPlaceholder(value: string | null | undefined): boolean {
  return value == null || value.trim() === '' || MARKERS.test(value);
}

/** The string if it is real content, otherwise null — handy for `{real(x) && …}`. */
export function real(value: string | null | undefined): string | null {
  return isPlaceholder(value) ? null : (value as string);
}

/**
 * Keep only the entries whose listed fields are all real.
 * Used to drop example events, unwritten articles and empty stat tiles.
 */
export function realItems<T extends Record<string, unknown>>(
  items: T[],
  ...requiredFields: (keyof T)[]
): T[] {
  return items.filter((item) =>
    requiredFields.every((f) => !isPlaceholder(item[f] as string)),
  );
}
