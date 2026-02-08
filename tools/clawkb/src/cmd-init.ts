import fs from "node:fs";
import path from "node:path";
import { getKBRoot } from "./fs-helpers.js";

export function init(): string {
  const kbRoot = getKBRoot();

  if (fs.existsSync(kbRoot)) {
    throw new Error(`Knowledge base already exists at: ${kbRoot}`);
  }

  fs.mkdirSync(kbRoot, { recursive: true });

  // Create example topics
  const exampleTopics = ["general", "notes", "ideas"];
  for (const topic of exampleTopics) {
    fs.mkdirSync(path.join(kbRoot, topic), { recursive: true });
  }

  return kbRoot;
}
