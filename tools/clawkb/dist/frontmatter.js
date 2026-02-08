const FRONTMATTER_DELIMITER = "---";
export function serializeFrontmatter(fm) {
    const lines = [
        FRONTMATTER_DELIMITER,
        `title: "${fm.title}"`,
        `tags: [${fm.tags.map((t) => `"${t}"`).join(", ")}]`,
        `created: "${fm.created}"`,
        FRONTMATTER_DELIMITER,
    ];
    return lines.join("\n");
}
export function parseFrontmatter(raw) {
    const lines = raw.split("\n");
    if (lines[0]?.trim() !== FRONTMATTER_DELIMITER) {
        throw new Error("Missing frontmatter delimiter at start of file");
    }
    const closingIdx = lines.indexOf(FRONTMATTER_DELIMITER, 1);
    if (closingIdx === -1) {
        throw new Error("Missing closing frontmatter delimiter");
    }
    const fmLines = lines.slice(1, closingIdx);
    const fmMap = new Map();
    for (const line of fmLines) {
        const colonIdx = line.indexOf(":");
        if (colonIdx === -1)
            continue;
        const key = line.slice(0, colonIdx).trim();
        const value = line.slice(colonIdx + 1).trim();
        fmMap.set(key, value);
    }
    const title = stripQuotes(fmMap.get("title") ?? "");
    const tags = parseTags(fmMap.get("tags") ?? "[]");
    const created = stripQuotes(fmMap.get("created") ?? "");
    const content = lines.slice(closingIdx + 1).join("\n").trim();
    return {
        frontmatter: { title, tags, created },
        content,
    };
}
function stripQuotes(s) {
    if ((s.startsWith('"') && s.endsWith('"')) ||
        (s.startsWith("'") && s.endsWith("'"))) {
        return s.slice(1, -1);
    }
    return s;
}
function parseTags(raw) {
    const inner = raw.replace(/^\[/, "").replace(/\]$/, "").trim();
    if (inner.length === 0)
        return [];
    return inner.split(",").map((t) => stripQuotes(t.trim()));
}
//# sourceMappingURL=frontmatter.js.map