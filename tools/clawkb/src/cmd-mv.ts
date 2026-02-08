import fs from "node:fs";
import { parseFrontmatter, serializeFrontmatter } from "./frontmatter.js";
import { ensureDir, getEntryPath, getTopicDir } from "./fs-helpers.js";

export function move(topic: string, title: string, newTopic: string): string {
  if (!topic || topic.trim() === "") {
    throw new Error("Topic cannot be empty");
  }
  if (!title || title.trim() === "") {
    throw new Error("Title cannot be empty");
  }
  if (!newTopic || newTopic.trim() === "") {
    throw new Error("New topic cannot be empty");
  }

  const oldPath = getEntryPath(topic, title);

  if (!fs.existsSync(oldPath)) {
    throw new Error(`Entry not found: ${topic}/${title}`);
  }

  const newTopicDir = getTopicDir(newTopic);
  ensureDir(newTopicDir);

  const newPath = getEntryPath(newTopic, title);

  if (fs.existsSync(newPath)) {
    throw new Error(`Entry already exists in target topic: ${newTopic}/${title}`);
  }

  fs.renameSync(oldPath, newPath);

  return newPath;
}
