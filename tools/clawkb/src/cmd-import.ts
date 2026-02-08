import fs from "node:fs";
import { add } from "./cmd-add.js";

interface ImportEntry {
  topic: string;
  title: string;
  tags: string[];
  created: string;
  content: string;
}

interface ImportData {
  version: string;
  exportedAt: string;
  totalEntries: number;
  entries: ImportEntry[];
}

export function importFromJSON(filePath: string): number {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Import file not found: ${filePath}`);
  }

  const raw = fs.readFileSync(filePath, "utf-8");
  const data: ImportData = JSON.parse(raw);

  if (!data.entries || !Array.isArray(data.entries)) {
    throw new Error("Invalid import file format");
  }

  let imported = 0;

  for (const entry of data.entries) {
    try {
      add(entry.topic, entry.title, entry.tags);
      imported++;
    } catch (err) {
      console.warn(`Skipped ${entry.topic}/${entry.title}: ${err instanceof Error ? err.message : String(err)}`);
    }
  }

  return imported;
}
