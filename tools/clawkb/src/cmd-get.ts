import fs from "node:fs";
import { parseFrontmatter } from "./frontmatter.js";
import { getEntryByIdOrTitle } from "./fs-helpers.js";
import type { KBEntry } from "./types.js";

export function get(topicOrId: string, title?: string): KBEntry {
  if (!topicOrId || topicOrId.trim() === "") {
    throw new Error("Topic or ID cannot be empty");
  }

  const { filePath, topic } = getEntryByIdOrTitle(topicOrId, title);

  const raw = fs.readFileSync(filePath, "utf-8");
  const { frontmatter, content } = parseFrontmatter(raw);

  return { frontmatter, content, filePath, topic };
}
