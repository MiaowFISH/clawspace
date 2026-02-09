import fs from "node:fs";
import { parseFrontmatter, serializeFrontmatter } from "./frontmatter.js";
import { getEntryByIdOrTitle } from "./fs-helpers.js";

export function addTag(topicOrId: string, titleOrTag: string, tag?: string): void {
  if (!topicOrId || topicOrId.trim() === "") {
    throw new Error("Topic or ID cannot be empty");
  }

  const actualTag = tag || titleOrTag;
  const actualTitle = tag ? titleOrTag : undefined;

  if (!actualTag || actualTag.trim() === "") {
    throw new Error("Tag cannot be empty");
  }

  const { filePath } = getEntryByIdOrTitle(topicOrId, actualTitle);

  const raw = fs.readFileSync(filePath, "utf-8");
  const { frontmatter, content } = parseFrontmatter(raw);

  if (frontmatter.tags.includes(actualTag)) {
    throw new Error(`Tag "${actualTag}" already exists`);
  }

  frontmatter.tags.push(actualTag);

  const header = serializeFrontmatter(frontmatter);
  fs.writeFileSync(filePath, header + content, "utf-8");
}
