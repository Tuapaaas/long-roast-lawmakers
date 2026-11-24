// The Long Roast: Lawmakers and the File They Cannot Convert
// One satirical sentence, written to /output/entry.txt.
// Gate: UTF-8 text, 1 to 320 characters, single sentence.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const roast =
  "They wrote a 400-page law to regulate artificial intelligence, then emailed the final draft as a Word file for the intern to convert, because the only file format the committee has truly mastered is paper, stapled twice.";

// Self-check: the sealed gate needs 1-320 UTF-8 characters, one sentence.
if (roast.length < 1 || roast.length > 320 || roast.trim() !== roast) {
  throw new Error(`entry out of gate: ${roast.length} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), roast, "utf8");
console.log(`wrote ${roast.length} characters to ${join(outDir, "entry.txt")}`);
