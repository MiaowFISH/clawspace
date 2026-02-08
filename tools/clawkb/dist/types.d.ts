export interface Frontmatter {
    title: string;
    tags: string[];
    created: string;
}
export interface KBEntry {
    frontmatter: Frontmatter;
    content: string;
    filePath: string;
    topic: string;
}
export interface SearchResult {
    entry: KBEntry;
    matchedLines: string[];
}
