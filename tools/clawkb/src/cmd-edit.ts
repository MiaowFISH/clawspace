import fs from "node:fs";
import { spawnSync } from "node:child_process";
import { getEntryPath } from "./fs-helpers.js";

export function edit(topic: string, title: string): void {
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

  const editor = process.env.EDITOR || process.env.VISUAL || "nano";

  const result = spawnSync(editor, [filePath], {
    stdio: "inherit",
    shell: true,
  });

  if (result.error) {
    throw new Error(`Failed to open editor: ${result.error.message}`);
  }

  if (result.status !== 0) {
    throw new Error(`Editor exited with code ${result.status}`);
  }
}
