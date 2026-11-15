import { defineConfig } from "@workerstack/repo";

export default defineConfig({
  packs: ["agents", "standards", "docs"],
  link: { push: "allow" },
  agents: { hosts: ["claude", "codex", "antigravity", "grok", "cursor"] },
});
