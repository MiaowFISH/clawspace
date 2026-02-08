import { list } from "./cmd-list.js";
export function search(query) {
    const entries = list();
    const lowerQuery = query.toLowerCase();
    const results = [];
    for (const entry of entries) {
        const matchedLines = [];
        if (entry.frontmatter.title.toLowerCase().includes(lowerQuery)) {
            matchedLines.push(`[title] ${entry.frontmatter.title}`);
        }
        for (const tag of entry.frontmatter.tags) {
            if (tag.toLowerCase().includes(lowerQuery)) {
                matchedLines.push(`[tag] ${tag}`);
            }
        }
        const contentLines = entry.content.split("\n");
        for (const line of contentLines) {
            if (line.toLowerCase().includes(lowerQuery)) {
                matchedLines.push(line.trim());
            }
        }
        if (matchedLines.length > 0) {
            results.push({ entry, matchedLines });
        }
    }
    return results;
}
//# sourceMappingURL=cmd-search.js.map