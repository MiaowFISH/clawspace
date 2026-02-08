import type { Frontmatter } from "./types.js";
export declare function serializeFrontmatter(fm: Frontmatter): string;
export declare function parseFrontmatter(raw: string): {
    frontmatter: Frontmatter;
    content: string;
};
