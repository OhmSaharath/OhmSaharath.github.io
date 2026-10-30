import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const requiredFiles = [
  "index.html",
  "styles.css",
  "content.js",
  "app.js",
  "assets/favicon.svg",
  "assets/Saharath_Lertkirawong_Resume.pdf",
  "README.md",
  "GEMINI.md",
  "PROJECT_STATUS.md"
];

const failures = [];

for (const file of requiredFiles) {
  if (!fs.existsSync(path.join(root, file))) failures.push(`Missing required file: ${file}`);
}

const index = fs.readFileSync(path.join(root, "index.html"), "utf8");
const localReferences = [...index.matchAll(/(?:src|href)="([^"]+)"/g)]
  .map((match) => match[1])
  .filter((reference) => !/^(?:https?:|mailto:|tel:|#)/.test(reference));

for (const reference of localReferences) {
  const cleanReference = reference.split(/[?#]/)[0];
  if (!fs.existsSync(path.join(root, cleanReference))) failures.push(`Broken local reference: ${reference}`);
}

const sandbox = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, "content.js"), "utf8"), sandbox);
const content = sandbox.window.PORTFOLIO_CONTENT;

if (!content?.en || !content?.th) {
  failures.push("content.js must expose both English and Thai content.");
} else {
  const shape = (value) => {
    if (Array.isArray(value)) return ["array", value.length, ...value.map(shape)];
    if (value && typeof value === "object") {
      return Object.fromEntries(Object.keys(value).sort().map((key) => [key, shape(value[key])]));
    }
    return typeof value;
  };

  if (JSON.stringify(shape(content.en)) !== JSON.stringify(shape(content.th))) {
    failures.push("English and Thai content structures do not match.");
  }
}

const requiredText = ["fatcat.stream", "order.fatcat.stream", "OhmSaharath", "Monday–Friday"];
for (const text of requiredText) {
  const sources = [index, fs.readFileSync(path.join(root, "content.js"), "utf8")].join("\n");
  if (!sources.includes(text)) failures.push(`Required portfolio fact is missing: ${text}`);
}

if (failures.length) {
  console.error("Portfolio checks failed:\n" + failures.map((failure) => `- ${failure}`).join("\n"));
  process.exit(1);
}

console.log(`Portfolio checks passed (${requiredFiles.length} required files, ${localReferences.length} local references, EN/TH content parity).`);
