import fs from "node:fs";
import { parseFrontmatter } from "./frontmatter.js";
import { getEntryPath } from "./fs-helpers.js";
import type { KBEntry } from "./types.js";

export function get(topic: string, title: string): KBEntry {
  if (!topic || topic.trim() === "") {
    throw new Error("Topic cannot be empty");
  }
  if (!title || title.trim() === "") {
    throw new Error("Title cannot be empty");
  }

  const filePath = getEntryPath(topic, title);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Entry not found: ${topic}/${title}\nFile path: ${filePath}`);
  }

  const raw = fs.readFileSync(filePath, "utf-8");
  const { frontmatter, content } = parseFrontmatter(raw);

  return { frontmatter, content, filePath, topic };
}
