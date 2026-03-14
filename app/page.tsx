import {
  GitBranch,
  FileCode,
  ExternalLink,
  Github,
  Clock,
  FileText,
  Gamepad2,
  Globe,
} from "lucide-react";

const REPO = {
  org: "register-web",
  name: "sdk_help",
  branch: "main",
  githubUrl: "https://github.com/register-web/sdk_help",
  branchUrl: "https://github.com/register-web/sdk_help/tree/main",
};

const FILES = [
  {
    name: "index.html",
    path: "./index.html",
    description: "Project hub — landing page linking to the game and Telegram source.",
    language: "HTML",
    size: "3.4 KB",
    icon: Globe,
    tags: ["landing", "entry point"],
    previewHref: "/preview/index",
    githubHref: `${REPO.githubUrl}/blob/main/index.html`,
  },
  {
    name: "gemini_rent.html",
    path: "./gemini_rent.html",
    description: "3D horror game — full Three.js scene with mobile joystick, puzzles, notes, and win/lose screens.",
    language: "HTML",
    size: "~250 KB",
    icon: Gamepad2,
    tags: ["three.js", "game", "3D"],
    previewHref: "/preview/gemini_rent",
    githubHref: `${REPO.githubUrl}/blob/main/gemini_rent.html`,
  },
];

function Tag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-mono border border-border text-muted bg-card">
      {label}
    </span>
  );
}

function FileBadge({ lang }: { lang: string }) {
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-border text-xs font-mono text-muted">
      <FileText size={10} />
      {lang}
    </span>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      {/* Top nav */}
      <header className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 h-12 flex items-center justify-between gap-4">
          <nav className="flex items-center gap-1 text-sm font-mono text-muted">
            <a
              href={`https://github.com/${REPO.org}`}
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground transition-colors"
            >
              {REPO.org}
            </a>
            <span className="opacity-30">/</span>
            <a
              href={REPO.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground transition-colors text-foreground font-semibold"
            >
              {REPO.name}
            </a>
          </nav>

          <a
            href={REPO.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono text-muted hover:text-foreground transition-colors"
            aria-label="Open on GitHub"
          >
            <Github size={14} />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 flex flex-col gap-8">

        {/* Repo info */}
        <section className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-2xl font-semibold tracking-tight text-balance">
              {REPO.org}/{REPO.name}
            </h1>
            <a
              href={REPO.branchUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-border text-xs font-mono text-muted hover:text-foreground hover:border-foreground/30 transition-colors"
            >
              <GitBranch size={11} />
              {REPO.branch}
            </a>
          </div>

          <p className="text-sm text-muted leading-relaxed max-w-xl">
            Cloned from{" "}
            <a
              href={REPO.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-foreground underline underline-offset-2 hover:opacity-70 transition-opacity"
            >
              github.com/{REPO.org}/{REPO.name}
            </a>
            . Browse and open files below.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-muted">
            <span className="flex items-center gap-1.5">
              <FileCode size={12} />
              2 files
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={12} />
              Branch: main
            </span>
            <span className="flex items-center gap-1.5">
              <GitBranch size={12} />
              register-web/sdk_help
            </span>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-border" />

        {/* File list */}
        <section className="flex flex-col gap-3">
          <p className="text-xs font-mono text-muted uppercase tracking-widest">
            Files — main
          </p>

          <ul className="flex flex-col gap-3" role="list">
            {FILES.map((file) => {
              const Icon = file.icon;
              return (
                <li
                  key={file.name}
                  className="group rounded-lg border border-border bg-card hover:bg-card-hover transition-colors"
                >
                  <div className="p-5 flex flex-col gap-4">
                    {/* Header row */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="flex-shrink-0 w-9 h-9 rounded-md border border-border bg-background flex items-center justify-center">
                          <Icon size={16} className="text-muted" />
                        </div>
                        <div className="min-w-0">
                          <p className="font-mono text-sm font-semibold text-foreground truncate">
                            {file.name}
                          </p>
                          <p className="text-xs text-muted font-mono mt-0.5">
                            {file.size}
                          </p>
                        </div>
                      </div>
                      <FileBadge lang={file.language} />
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted leading-relaxed">
                      {file.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {file.tags.map((tag) => (
                        <Tag key={tag} label={tag} />
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      <a
                        href={file.previewHref}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-foreground text-background text-sm font-medium hover:opacity-85 transition-opacity"
                      >
                        Open file
                        <ExternalLink size={13} />
                      </a>
                      <a
                        href={file.githubHref}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border text-sm font-medium text-muted hover:text-foreground hover:border-foreground/30 transition-colors"
                      >
                        <Github size={13} />
                        View on GitHub
                      </a>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>

        {/* Footer */}
        <footer className="pt-4 border-t border-border flex items-center justify-between gap-4 text-xs font-mono text-muted">
          <span>register-web/sdk_help · main</span>
          <a
            href={REPO.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 hover:text-foreground transition-colors"
          >
            <Github size={12} />
            Open repo
          </a>
        </footer>
      </div>
    </main>
  );
}
