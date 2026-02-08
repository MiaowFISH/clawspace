#!/usr/bin/env node
import { add } from "./cmd-add.js";
import { list } from "./cmd-list.js";
import { search } from "./cmd-search.js";
const args = process.argv.slice(2);
const command = args[0];
function printUsage() {
    console.log("Usage:");
    console.log("  kb add <topic> <title> [--tags tag1,tag2]");
    console.log("  kb list [topic]");
    console.log("  kb search <query>");
}
function parseTagsFlag(flagArgs) {
    const idx = flagArgs.indexOf("--tags");
    if (idx === -1 || idx + 1 >= flagArgs.length)
        return [];
    return flagArgs[idx + 1].split(",").map((t) => t.trim());
}
function handleAdd() {
    const topic = args[1];
    const title = args[2];
    if (!topic || !title) {
        console.error("Error: kb add requires <topic> and <title>");
        printUsage();
        process.exit(1);
    }
    const tags = parseTagsFlag(args);
    const filePath = add(topic, title, tags);
    console.log(`Created: ${filePath}`);
}
function handleList() {
    const topic = args[1];
    const entries = list(topic);
    if (entries.length === 0) {
        console.log(topic ? `No entries in topic: ${topic}` : "No entries found.");
        return;
    }
    for (const entry of entries) {
        const tags = entry.frontmatter.tags.join(", ");
        console.log(`[${entry.topic}] ${entry.frontmatter.title} (${tags})`);
    }
    console.log(`\nTotal: ${entries.length} entries`);
}
function handleSearch() {
    const query = args.slice(1).join(" ");
    if (!query) {
        console.error("Error: kb search requires <query>");
        printUsage();
        process.exit(1);
    }
    const results = search(query);
    if (results.length === 0) {
        console.log(`No results for: "${query}"`);
        return;
    }
    for (const result of results) {
        const { entry, matchedLines } = result;
        console.log(`\n[${entry.topic}] ${entry.frontmatter.title}`);
        console.log(`  File: ${entry.filePath}`);
        for (const line of matchedLines.slice(0, 5)) {
            console.log(`  > ${line}`);
        }
    }
    console.log(`\nFound: ${results.length} matches`);
}
try {
    switch (command) {
        case "add":
            handleAdd();
            break;
        case "list":
            handleList();
            break;
        case "search":
            handleSearch();
            break;
        default:
            printUsage();
            process.exit(command ? 1 : 0);
    }
}
catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error(`Error: ${message}`);
    process.exit(1);
}
//# sourceMappingURL=cli.js.map