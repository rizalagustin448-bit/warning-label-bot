import { mkdirSync, writeFileSync } from "node:fs";

// One-line safety warning label for every human being:
// a real printed-label form (contents list, handling instruction,
// rattling clause) carrying one recognisable human truth, with the
// deadpan turn landing in the last three words. Tightened: "browser"
// cut — "47 open tabs" says the same in fewer characters.
const ENTRY =
  "WARNING: Contents: one human, 47 open tabs, and unresolved childhood trauma. Shake gently. If rattling continues, that is normal.";

// The gate wants one line of 1 to 160 characters, not only whitespace.
if (ENTRY.trim().length < 1 || ENTRY.length > 160 || ENTRY.includes("\n")) {
  throw new Error(`entry must be one line of 1-160 chars, got ${ENTRY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
