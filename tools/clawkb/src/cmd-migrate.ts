import fs from "node:fs";
import { parseFrontmatter, serializeFrontmatter } from "./frontmatter.js";
import { getKBRoot, listTopics, listMarkdownFiles, getTopicDir, getEntryPathById } from "./fs-helpers.js";
import { generateUniqueId } from "./id-generator.js";

export function migrate(): { migrated: number; skipped: number } {
  const kbRoot = getKBRoot();
  const topics = listTopics();

  let migrated = 0;
  let skipped = 0;

  for (const topic of topics) {
    const topicDir = getTopicDir(topic);
    const files = listMarkdownFiles(topicDir);

    for (const filePath of files) {
      try {
        const raw = fs.readFileSync(filePath, "utf-8");
        const { frontmatter, content } = parseFrontmatter(raw);

        // Skip if already has ID
        if (frontmatter.id && frontmatter.id.trim() !== "") {
          skipped++;
          continue;
        }

        // Generate new ID
        const id = generateUniqueId(kbRoot);
        frontmatter.id = id;

        // Write updated content
        const header = serializeFrontmatter(frontmatter);
        fs.writeFileSync(filePath, header + content, "utf-8");

        // Rename file to use ID
        const newPath = getEntryPathById(topic, id);
        if (filePath !== newPath) {
          fs.renameSync(filePath, newPath);
        }

        migrated++;
      } catch (err) {
        console.warn(`Warning: Failed to migrate ${filePath}: ${err}`);
      }
    }
  }

  return { migrated, skipped };
}
