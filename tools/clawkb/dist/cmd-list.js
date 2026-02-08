import fs from "node:fs";
import { parseFrontmatter } from "./frontmatter.js";
import { getTopicDir, listMarkdownFiles, listTopics, } from "./fs-helpers.js";
function readEntry(filePath, topic) {
    const raw = fs.readFileSync(filePath, "utf-8");
    const { frontmatter, content } = parseFrontmatter(raw);
    return { frontmatter, content, filePath, topic };
}
export function list(topic) {
    const topics = topic ? [topic] : listTopics();
    const entries = [];
    for (const t of topics) {
        const dir = getTopicDir(t);
        const files = listMarkdownFiles(dir);
        for (const f of files) {
            entries.push(readEntry(f, t));
        }
    }
    return entries;
}
//# sourceMappingURL=cmd-list.js.map