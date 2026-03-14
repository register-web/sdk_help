import { execSync } from "child_process"
import { existsSync } from "fs"
import { resolve } from "path"

const root = resolve("/vercel/share/v0-project")

console.log("[setup] Working directory:", root)
console.log("[setup] Checking for package.json...")

if (!existsSync(`${root}/package.json`)) {
  console.error("[setup] ERROR: package.json not found!")
  process.exit(1)
}

console.log("[setup] package.json found. Running pnpm install...")

try {
  execSync("pnpm install --no-frozen-lockfile", {
    cwd: root,
    stdio: "inherit",
  })
  console.log("[setup] pnpm install completed successfully.")
} catch (err) {
  console.error("[setup] pnpm install failed:", err.message)
  process.exit(1)
}
