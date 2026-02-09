# clawkb

A simple, zero-dependency Markdown knowledge base CLI tool built with Node.js.

## Features

- 📝 Markdown-based notes with frontmatter metadata
- 🆔 Unique ID system for each note (short 8-character IDs)
- 🏷️ Tag-based organization
- 🔍 Full-text search across all notes
- 📁 Topic-based categorization
- 💾 Import/Export to JSON
- ⚙️ Configurable via `.clawkbrc` file
- 🔄 Migration tool for existing notes
- 🚀 Zero dependencies (uses only Node.js standard library)

## Installation

### Local Installation

```bash
cd tools/clawkb
npm install
npm run build
```

### Global Installation

```bash
cd tools/clawkb
npm install
npm run build
npm link
```

After linking, you can use `kb` command globally:

```bash
kb list
kb add myproject "Project Setup"
```

## Configuration

Create a `.clawkbrc` file in your project root to customize settings:

```json
{
  "dataDir": "./kb",
  "maxIdLength": 8
}
```

- `dataDir`: Directory where notes are stored (default: `./kb`)
- `maxIdLength`: Length of generated IDs (default: `8`)

## Quick Start

1. Initialize the knowledge base:
```bash
kb init
```

2. Add your first note:
```bash
kb add general "My First Note" --tags learning,demo
```

3. List all notes (shows IDs):
```bash
kb list
```

4. Get a note by ID:
```bash
kb get abc123xy
```

5. Search for content:
```bash
kb search "first note"
```

## Commands

### `kb init`
Initialize a new knowledge base with example topics.

```bash
kb init
```

### `kb add <topic> <title> [--tags tag1,tag2]`
Create a new note in the specified topic.

```bash
kb add yesimbot "Bot Architecture" --tags ai,design,architecture
kb add ideas "Feature Request"
```

### `kb list [topic]`
List all notes, or notes in a specific topic.

```bash
kb list              # List all notes
kb list yesimbot     # List notes in 'yesimbot' topic
```

### `kb search <query>`
Search for notes containing the query string.

```bash
kb search "architecture"
kb search "bot design"
```

### `kb get <id>` or `kb get <topic> <title>`
View the full content of a specific note by ID or by topic and title.

```bash
kb get abc123xy                    # Get by ID
kb get yesimbot "Bot Architecture" # Get by topic and title
```

### `kb edit <id>` or `kb edit <topic> <title>`
Edit an existing note using your default editor ($EDITOR or nano).

```bash
kb edit abc123xy                   # Edit by ID
kb edit yesimbot "Bot Architecture" # Edit by topic and title
```

### `kb delete <id>` or `kb delete <topic> <title>`
Delete a note by ID or by topic and title.

```bash
kb delete abc123xy                 # Delete by ID
kb delete yesimbot "Old Note"      # Delete by topic and title
```

### `kb tag <id> <tag>` or `kb tag <topic> <title> <tag>`
Add a tag to an existing note.

```bash
kb tag abc123xy important                    # Tag by ID
kb tag yesimbot "Bot Architecture" important # Tag by topic and title
```

### `kb migrate`
Migrate existing notes to the new ID-based format. This command:
- Scans all existing notes
- Generates unique IDs for notes without IDs
- Renames files to use ID format
- Updates frontmatter with ID field

```bash
kb migrate
```

### `kb mv <topic> <title> <new-topic>`
Move a note to a different topic.

```bash
kb mv ideas "Feature Request" yesimbot
```

### `kb export [output-file]`
Export all notes to a JSON file.

```bash
kb export                    # Auto-generates filename
kb export my-backup.json     # Custom filename
```

### `kb import <file>`
Import notes from a JSON file.

```bash
kb import my-backup.json
```

### `kb stats`
Display statistics about your knowledge base.

```bash
kb stats
```

## File Structure

```
kb/
└── topics/
    ├── general/
    │   └── abc123xy.md
    ├── yesimbot/
    │   └── def456gh.md
    └── ideas/
        └── ghi789jk.md
```

Each note is a Markdown file named with its unique ID and contains frontmatter:

```markdown
---
id: abc123xy
title: Bot Architecture
tags:
  - ai
  - design
  - architecture
created: 2026-02-09T12:00:00.000Z
---

# Bot Architecture

Your note content here...
```

## Usage Examples

### Daily Workflow

```bash
# Morning: Add a new task
kb add tasks "Review PR #123" --tags urgent,code-review

# Afternoon: Take meeting notes
kb add meetings "Team Sync 2026-02-09" --tags team,weekly

# Evening: Review what you've captured
kb list
kb stats
```

### Project Documentation

```bash
# Document architecture decisions
kb add architecture "API Design" --tags backend,rest

# Add implementation notes
kb add implementation "Database Schema" --tags postgres,migrations

# Search across project docs
kb search "database"
```

### Knowledge Management

```bash
# Organize by topic
kb add learning "TypeScript Tips" --tags typescript,programming
kb add learning "Git Workflows" --tags git,devops

# Move notes between topics
kb mv learning "Git Workflows" devops

# Add tags as you learn more
kb tag devops "Git Workflows" automation
```

## Development

### Build

```bash
npm run build
```

### Project Structure

```
tools/clawkb/
├── src/
│   ├── cli.ts           # Main CLI entry point
│   ├── cmd-*.ts         # Command implementations
│   ├── fs-helpers.ts    # File system utilities
│   ├── frontmatter.ts   # Frontmatter parsing
│   └── types.ts         # TypeScript types
├── dist/                # Compiled JavaScript
├── package.json
├── tsconfig.json
└── README.md
```

## Technical Details

- **Zero Dependencies**: Uses only Node.js standard library (fs, path, child_process)
- **TypeScript**: Written in TypeScript, compiled to JavaScript
- **Frontmatter**: YAML frontmatter for metadata
- **File Naming**: Automatic slug generation from titles
- **Editor Integration**: Uses $EDITOR environment variable

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

