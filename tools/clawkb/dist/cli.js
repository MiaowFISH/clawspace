#!/usr/bin/env node
import { add } from "./cmd-add.js";
import { list } from "./cmd-list.js";
import { search } from "./cmd-search.js";
import { edit } from "./cmd-edit.js";
import { deleteEntry } from "./cmd-delete.js";
import { init } from "./cmd-init.js";
import { stats } from "./cmd-stats.js";
import { get } from "./cmd-get.js";
import { addTag } from "./cmd-tag.js";
import { move } from "./cmd-mv.js";
import { exportToJSON } from "./cmd-export.js";
import { importFromJSON } from "./cmd-import.js";
let args = process.argv.slice(2);
// Strip 'kb' prefix if present (e.g., "node cli.js kb list" -> "node cli.js list")
if (args[0] === "kb") {
    args = args.slice(1);
}
const command = args[0];
function printUsage() {
    console.log("Usage:");
    console.log("  kb init");
    console.log("  kb add <topic> <title> [--tags tag1,tag2]");
    console.log("  kb list [topic]");
    console.log("  kb search <query>");
    console.log("  kb get <topic> <title>");
    console.log("  kb edit <topic> <title>");
    console.log("  kb delete <topic> <title>");
    console.log("  kb tag <topic> <title> <tag>");
    console.log("  kb mv <topic> <title> <new-topic>");
    console.log("  kb export [output-file]");
    console.log("  kb import <file>");
    console.log("  kb stats");
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
function handleEdit() {
    const topic = args[1];
    const title = args[2];
    if (!topic || !title) {
        console.error("Error: kb edit requires <topic> and <title>");
        printUsage();
        process.exit(1);
    }
    edit(topic, title);
    console.log(`Edited: ${topic}/${title}`);
}
function handleDelete() {
    const topic = args[1];
    const title = args[2];
    if (!topic || !title) {
        console.error("Error: kb delete requires <topic> and <title>");
        printUsage();
        process.exit(1);
    }
    const filePath = deleteEntry(topic, title);
    console.log(`Deleted: ${filePath}`);
}
function handleInit() {
    const kbRoot = init();
    console.log(`Initialized knowledge base at: ${kbRoot}`);
    console.log("Created example topics: general, notes, ideas");
}
function handleStats() {
    const result = stats();
    console.log("\n=== Knowledge Base Statistics ===\n");
    console.log(`Total entries: ${result.totalEntries}`);
    console.log(`Total topics: ${result.totalTopics}`);
    if (Object.keys(result.topicCounts).length > 0) {
        console.log("\nEntries by topic:");
        for (const [topic, count] of Object.entries(result.topicCounts)) {
            console.log(`  ${topic}: ${count}`);
        }
    }
    if (Object.keys(result.tagCounts).length > 0) {
        console.log("\nEntries by tag:");
        const sortedTags = Object.entries(result.tagCounts).sort((a, b) => b[1] - a[1]);
        for (const [tag, count] of sortedTags.slice(0, 10)) {
            console.log(`  ${tag}: ${count}`);
        }
    }
}
function handleGet() {
    const topic = args[1];
    const title = args[2];
    if (!topic || !title) {
        console.error("Error: kb get requires <topic> and <title>");
        printUsage();
        process.exit(1);
    }
    const entry = get(topic, title);
    console.log(`\n[${entry.topic}] ${entry.frontmatter.title}`);
    console.log(`Tags: ${entry.frontmatter.tags.join(", ")}`);
    console.log(`Created: ${entry.frontmatter.created}`);
    console.log(`File: ${entry.filePath}`);
    console.log("\n---\n");
    console.log(entry.content);
}
function handleTag() {
    const topic = args[1];
    const title = args[2];
    const tag = args[3];
    if (!topic || !title || !tag) {
        console.error("Error: kb tag requires <topic>, <title>, and <tag>");
        printUsage();
        process.exit(1);
    }
    addTag(topic, title, tag);
    console.log(`Added tag "${tag}" to ${topic}/${title}`);
}
function handleMove() {
    const topic = args[1];
    const title = args[2];
    const newTopic = args[3];
    if (!topic || !title || !newTopic) {
        console.error("Error: kb mv requires <topic>, <title>, and <new-topic>");
        printUsage();
        process.exit(1);
    }
    const newPath = move(topic, title, newTopic);
    console.log(`Moved ${topic}/${title} to ${newTopic}/`);
    console.log(`New path: ${newPath}`);
}
function handleExport() {
    const outputFile = args[1];
    const filePath = exportToJSON(outputFile);
    console.log(`Exported knowledge base to: ${filePath}`);
}
function handleImport() {
    const filePath = args[1];
    if (!filePath) {
        console.error("Error: kb import requires <file>");
        printUsage();
        process.exit(1);
    }
    const imported = importFromJSON(filePath);
    console.log(`Imported ${imported} entries from: ${filePath}`);
}
try {
    switch (command) {
        case "init":
            handleInit();
            break;
        case "add":
            handleAdd();
            break;
        case "list":
            handleList();
            break;
        case "search":
            handleSearch();
            break;
        case "get":
            handleGet();
            break;
        case "edit":
            handleEdit();
            break;
        case "delete":
            handleDelete();
            break;
        case "tag":
            handleTag();
            break;
        case "mv":
            handleMove();
            break;
        case "export":
            handleExport();
            break;
        case "import":
            handleImport();
            break;
        case "stats":
            handleStats();
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