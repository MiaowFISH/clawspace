import fs from "node:fs";
import { getEntryByIdOrTitle } from "./fs-helpers.js";

export function deleteEntry(topicOrId: string, title?: string): string {
  if (!topicOrId || topicOrId.trim() === "") {
    throw new Error("Topic or ID cannot be empty");
  }

  const { filePath } = getEntryByIdOrTitle(topicOrId, title);

  fs.unlinkSync(filePath);
  return filePath;
}
