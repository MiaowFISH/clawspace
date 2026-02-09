import fs from "node:fs";
import path from "node:path";
import { loadConfig } from "./config.js";

const CHARSET = "abcdefghijklmnopqrstuvwxyz0123456789";

export function generateId(length: number = 8): string {
  let id = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * CHARSET.length);
    id += CHARSET[randomIndex];
  }
  return id;
}

export function generateUniqueId(kbRoot: string): string {
  const config = loadConfig();
  const maxAttempts = 100;

  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    const id = generateId(config.maxIdLength);

    if (!idExists(kbRoot, id)) {
      return id;
    }
  }

  throw new Error("Failed to generate unique ID after multiple attempts");
}

export function idExists(kbRoot: string, id: string): boolean {
  if (!fs.existsSync(kbRoot)) {
    return false;
  }

  const topics = fs.readdirSync(kbRoot, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name);

  for (const topic of topics) {
    const topicDir = path.join(kbRoot, topic);
    const filePath = path.join(topicDir, `${id}.md`);

    if (fs.existsSync(filePath)) {
      return true;
    }
  }

  return false;
}
