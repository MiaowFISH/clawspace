import { spawnSync } from "node:child_process";
import { getEntryByIdOrTitle } from "./fs-helpers.js";

export function edit(topicOrId: string, title?: string): void {
  if (!topicOrId || topicOrId.trim() === "") {
    throw new Error("Topic or ID cannot be empty");
  }

  const { filePath } = getEntryByIdOrTitle(topicOrId, title);

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
