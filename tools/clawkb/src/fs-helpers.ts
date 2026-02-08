import fs from "node:fs";
import path from "node:path";

export function getKBRoot(): string {
  return path.resolve(process.cwd(), "kb", "topics");
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
