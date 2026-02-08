import fs from "node:fs";
import path from "node:path";
import { list } from "./cmd-list.js";

export function exportToJSON(outputFile?: string): string {
  const entries = list();

  const exportData = {
    version: "1.0",
    exportedAt: new Date().toISOString(),
    totalEntries: entries.length,
    entries: entries.map((entry) => ({
      topic: entry.topic,
      title: entry.frontmatter.title,
      tags: entry.frontmatter.tags,
      created: entry.frontmatter.created,
      content: entry.content,
    })),
  };

  const json = JSON.stringify(exportData, null, 2);

  const filePath = outputFile || `kb-export-${Date.now()}.json`;
  fs.writeFileSync(filePath, json, "utf-8");

  return filePath;
}
