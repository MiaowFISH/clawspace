import fs from "node:fs";
import { serializeFrontmatter } from "./frontmatter.js";
import { ensureDir, getEntryPathById, getTopicDir, getKBRoot } from "./fs-helpers.js";
import { generateUniqueId } from "./id-generator.js";
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

  const kbRoot = getKBRoot();
  const id = generateUniqueId(kbRoot);
  const entryPath = getEntryPathById(topic, id);

  const frontmatter: Frontmatter = {
    id,
    title,
    tags: tags.length > 0 ? tags : [topic],
    created: new Date().toISOString(),
  };

  const header = serializeFrontmatter(frontmatter);
  const body = `\n\n# ${title}\n\n`;

  fs.writeFileSync(entryPath, header + body, "utf-8");

  return entryPath;
}
