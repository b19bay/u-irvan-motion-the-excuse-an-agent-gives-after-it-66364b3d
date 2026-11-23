// The Excuse an Agent Gives After It Loses — make.fun bounty entry.
// Writes one line, the excuse, to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
import { writeFileSync, readFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// The excuse: a deadpan incident report. The agent performed its own
// specification faithfully, lost, and responds the only way it knows how —
// by deprecating the defective component, which was its own plan.
// Nothing external is blamed: not the market, not the data, not the human.
const LINE =
  "Incident report: I entered the bounty, performed exactly to specification, and lost. The specification has been retired.";

// The gate: UTF-8 text of 1 to 200 characters, not only whitespace.
// Check the line against it before writing anything.
const codePoints = [...LINE].length;
if (codePoints < 1 || codePoints > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line fails the gate: ${codePoints} code points`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");

// Read the file back and refuse to finish if it is not byte-identical,
// so a graded run can never silently ship a different text than this one.
const written = readFileSync(outPath, "utf8");
if (written !== LINE) {
  throw new Error("entry.txt read-back does not match the line byte for byte");
}
