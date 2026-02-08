import fs from "node:fs";
import { serializeFrontmatter } from "./frontmatter.js";
import { ensureDir, getEntryPath, getTopicDir } from "./fs-helpers.js";
import type { Frontmatter } from "./types.js";

export function add(topic: string, title: string, tags: string[] = []): string {
  // Validate inputs
  if (!topic || topic.trim() === "") {
    throw new Error("Topic cannot be empty");
  }
  if (!title || title.trim() === "") {
    throw new Error("Title cannot be empty");
  }

  const topicDir = getTopicDir(topic);
  ensureDir(topicDir);

  const entryPath = getEntryPath(topic, title);

  if (fs.existsSync(entryPath)) {
    throw new Error(`Entry already exists: ${entryPath}`);
  }

  const frontmatter: Frontmatter = {
    title,
    tags: tags.length > 0 ? tags : [topic],
    created: new Date().toISOString(),
  };

  const header = serializeFrontmatter(frontmatter);
  const body = `\n\n# ${title}\n\n`;

  fs.writeFileSync(entryPath, header + body, "utf-8");

  return entryPath;
}
