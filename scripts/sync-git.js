#!/usr/bin/env node

/**
 * Auto-commit and push workspace changes
 * Runs via cron to sync workspace to remote
 */

import { execSync } from 'child_process';
import fs from 'fs';

const WORKSPACE = '/opt/.openclaw/workspace';

function run(cmd, cwd = WORKSPACE) {
  try {
    return execSync(cmd, { cwd, encoding: 'utf-8' }).trim();
  } catch (error) {
    console.error(`❌ Failed: ${cmd}`);
    console.error(error.stderr || error.message);
    throw error;
  }
}

console.log('🔄 Starting workspace sync...');

// Check if there are changes
const status = run('git status --porcelain');
if (!status) {
  console.log('✅ No changes to commit');
  process.exit(0);
}

console.log('📝 Changes detected, committing...');

// Add all changes
run('git add .');

// Commit with timestamp (NekoChan identity already set in git config)
const timestamp = new Date().toISOString();
const message = `Auto-commit: ${timestamp}`;
run(`git commit -m "${message}"`);

console.log('✅ Commit created');

// Check if remote exists
const remotes = run('git remote').trim();
if (!remotes) {
  console.log('⚠️  No git remote configured');
  console.log('Please run: git remote add origin <your-repo-url>');
  console.log('Example: git remote add origin git@github.com:username/workspace.git');
  process.exit(1);
}

// Push to remote
console.log('📤 Pushing to remote...');
run('git push');

console.log('🎉 Sync complete!');
