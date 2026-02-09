import fs from "node:fs";
import { listTopics, getKBRoot, listMarkdownFiles, getTopicDir } from "./fs-helpers.js";
import { parseFrontmatter } from "./frontmatter.js";

export function getAllIds(): string[] {
  const kbRoot = getKBRoot();
  if (!fs.existsSync(kbRoot)) return [];

  const topics = listTopics();
  const ids: string[] = [];

  for (const topic of topics) {
    const topicDir = getTopicDir(topic);
    const files = listMarkdownFiles(topicDir);

    for (const filePath of files) {
      try {
        const raw = fs.readFileSync(filePath, "utf-8");
        const { frontmatter } = parseFrontmatter(raw);
        if (frontmatter.id) {
          ids.push(frontmatter.id);
        }
      } catch (err) {
        // Skip files that can't be parsed
      }
    }
  }

  return ids;
}
