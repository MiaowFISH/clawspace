import fs from "node:fs";
import { serializeFrontmatter } from "./frontmatter.js";
import { ensureDir, getEntryPath, getTopicDir } from "./fs-helpers.js";
export function add(topic, title, tags = []) {
    // Validate inputs
    if (!topic || topic.trim() === "") {
        throw new Error("Topic cannot be empty");
    }
    if (!title || title.trim() === "") {
        throw new Error("Title cannot be empty");
    }
    const topicDir = getTopicDir(topic);
    ensureDir(topicDir);
    const entryPath = getEntryPath(topic, title);
    if (fs.existsSync(entryPath)) {
        throw new Error(`Entry already exists: ${entryPath}`);
    }
    const frontmatter = {
        title,
        tags: tags.length > 0 ? tags : [topic],
        created: new Date().toISOString(),
    };
    const header = serializeFrontmatter(frontmatter);
    const body = `\n\n# ${title}\n\n`;
    fs.writeFileSync(entryPath, header + body, "utf-8");
    return entryPath;
}
//# sourceMappingURL=cmd-add.js.map