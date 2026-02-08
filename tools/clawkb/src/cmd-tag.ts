import fs from "node:fs";
import { parseFrontmatter, serializeFrontmatter } from "./frontmatter.js";
import { getEntryPath } from "./fs-helpers.js";

export function addTag(topic: string, title: string, tag: string): void {
  if (!topic || topic.trim() === "") {
    throw new Error("Topic cannot be empty");
  }
  if (!title || title.trim() === "") {
    throw new Error("Title cannot be empty");
  }
  if (!tag || tag.trim() === "") {
    throw new Error("Tag cannot be empty");
  }

  const filePath = getEntryPath(topic, title);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Entry not found: ${topic}/${title}`);
  }

  const raw = fs.readFileSync(filePath, "utf-8");
  const { frontmatter, content } = parseFrontmatter(raw);

  if (frontmatter.tags.includes(tag)) {
    throw new Error(`Tag "${tag}" already exists`);
  }

  frontmatter.tags.push(tag);

  const header = serializeFrontmatter(frontmatter);
  fs.writeFileSync(filePath, header + content, "utf-8");
}
