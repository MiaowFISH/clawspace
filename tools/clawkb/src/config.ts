import fs from "node:fs";
import path from "node:path";

export interface Config {
  dataDir: string;
  maxIdLength: number;
}

const DEFAULT_CONFIG: Config = {
  dataDir: "./kb",
  maxIdLength: 8,
};

let cachedConfig: Config | null = null;

/**
 * Find .clawkbrc file in search paths (priority order):
 * 1. Current directory
 * 2. Workspace directory (/opt/.openclaw/workspace)
 * 3. User home directory
 */
function findConfigPath(): string | null {
  const searchPaths = [
    process.cwd(),
    "/opt/.openclaw/workspace",
    process.env.HOME || process.env.USERPROFILE || "/root",
  ];

  for (const dir of searchPaths) {
    const configPath = path.resolve(dir, ".clawkbrc");
    if (fs.existsSync(configPath)) {
      return configPath;
    }
  }

  return null;
}

export function loadConfig(): Config {
  if (cachedConfig) {
    return cachedConfig;
  }

  const configPath = findConfigPath();

  if (!configPath) {
    cachedConfig = DEFAULT_CONFIG;
    return cachedConfig;
  }

  const configDir = path.dirname(configPath);

  try {
    const content = fs.readFileSync(configPath, "utf-8");
    const userConfig = JSON.parse(content);

    cachedConfig = {
      dataDir: userConfig.dataDir
        ? path.resolve(configDir, userConfig.dataDir)
        : path.resolve(configDir, DEFAULT_CONFIG.dataDir),
      maxIdLength: userConfig.maxIdLength || DEFAULT_CONFIG.maxIdLength,
    };

    return cachedConfig;
  } catch (err) {
    console.warn(`Warning: Failed to parse ${configPath}, using defaults`);
    cachedConfig = DEFAULT_CONFIG;
    return cachedConfig;
  }
}

export function resetConfigCache(): void {
  cachedConfig = null;
}
