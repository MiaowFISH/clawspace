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

export function loadConfig(): Config {
  if (cachedConfig) {
    return cachedConfig;
  }

  const configPath = path.resolve(process.cwd(), ".clawkbrc");

  if (!fs.existsSync(configPath)) {
    cachedConfig = DEFAULT_CONFIG;
    return cachedConfig;
  }

  try {
    const content = fs.readFileSync(configPath, "utf-8");
    const userConfig = JSON.parse(content);

    cachedConfig = {
      dataDir: userConfig.dataDir
        ? path.resolve(process.cwd(), userConfig.dataDir)
        : path.resolve(process.cwd(), DEFAULT_CONFIG.dataDir),
      maxIdLength: userConfig.maxIdLength || DEFAULT_CONFIG.maxIdLength,
    };

    return cachedConfig;
  } catch (err) {
    console.warn(`Warning: Failed to parse .clawkbrc, using defaults`);
    cachedConfig = DEFAULT_CONFIG;
    return cachedConfig;
  }
}

export function resetConfigCache(): void {
  cachedConfig = null;
}
