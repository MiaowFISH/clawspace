import fs from "node:fs";
import { getEntryPath } from "./fs-helpers.js";

export function deleteEntry(topic: string, title: string): string {
  // Validate inputs
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

  fs.unlinkSync(filePath);
  return filePath;
}
