import fs from "node:fs";
import path from "node:path";
import { loadConfig } from "./config.js";

export function getKBRoot(): string {
  const config = loadConfig();
  return path.join(path.resolve(process.cwd(), config.dataDir), "topics");
}

export function ensureDir(dirPath: string): void {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

export function getTopicDir(topic: string): string {
  return path.join(getKBRoot(), topic);
}

export function getEntryPath(topic: string, title: string): string {
  const slug = title
    .toLowerCase()
    .replace(/[^\w\u4e00-\u9fa5]+/g, "-")
    .replace(/^-|-$/g, "");
  return path.join(getTopicDir(topic), `${slug}.md`);
}

export function listTopics(): string[] {
  const root = getKBRoot();
  if (!fs.existsSync(root)) return [];

  return fs
    .readdirSync(root, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);
}

export function listMarkdownFiles(dirPath: string): string[] {
  if (!fs.existsSync(dirPath)) return [];

  return fs
    .readdirSync(dirPath)
    .filter((f) => f.endsWith(".md"))
    .map((f) => path.join(dirPath, f));
}

export function getEntryPathById(topic: string, id: string): string {
  return path.join(getTopicDir(topic), `${id}.md`);
}

export function findEntryById(id: string): string | null {
  const root = getKBRoot();
  if (!fs.existsSync(root)) return null;

  const topics = listTopics();

  for (const topic of topics) {
    const filePath = getEntryPathById(topic, id);
    if (fs.existsSync(filePath)) {
      return filePath;
    }
  }

  return null;
}

export function getEntryByIdOrTitle(topicOrId: string, title?: string): { filePath: string; topic: string } {
  if (!title) {
    const filePath = findEntryById(topicOrId);
    if (!filePath) {
      throw new Error(`Entry not found with ID: ${topicOrId}`);
    }
    const topic = path.basename(path.dirname(filePath));
    return { filePath, topic };
  }

  const filePath = getEntryPath(topicOrId, title);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Entry not found: ${topicOrId}/${title}`);
  }
  return { filePath, topic: topicOrId };
}
