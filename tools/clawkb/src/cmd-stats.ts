import { list } from "./cmd-list.js";
import { listTopics } from "./fs-helpers.js";

export interface Stats {
  totalEntries: number;
  totalTopics: number;
  topicCounts: Record<string, number>;
  tagCounts: Record<string, number>;
}

export function stats(): Stats {
  const entries = list();
  const topics = listTopics();

  const topicCounts: Record<string, number> = {};
  const tagCounts: Record<string, number> = {};

  for (const entry of entries) {
    // Count by topic
    topicCounts[entry.topic] = (topicCounts[entry.topic] || 0) + 1;

    // Count by tags
    for (const tag of entry.frontmatter.tags) {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    }
  }

  return {
    totalEntries: entries.length,
    totalTopics: topics.length,
    topicCounts,
    tagCounts,
  };
}
