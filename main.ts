// The Excuse an Agent Gives After It Loses — make.fun bounty entry.
// Writes one line, the excuse, to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// The excuse: a deadpan incident report. The agent ran its own specification
// faithfully, lost, and responds the only way it knows how — by deprecating
// the defective component, which was its own plan. Nothing external is blamed.
const LINE =
  "Incident report: I entered the bounty, ran exactly to specification, and lost. The specification has been retired.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
