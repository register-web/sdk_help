import { AuthorHeader } from "@/components/author-header";
import { ProjectCard } from "@/components/project-card";
import { ThemeToggle } from "@/components/theme-toggle";

const SOURCE_URL = "https://t.me/+vRsAKTf3zdk0ZWVi";

const PROJECTS = [
  {
    title: "Аренда",
    description: "3D хоррор-игра на Three.js с мобильным управлением, головоломками, записками и финальными экранами.",
    fileName: "gemini_rent.html",
    tags: ["three.js", "game", "3D", "horror"],
    openHref: "/preview/gemini_rent",
    sourceHref: SOURCE_URL,
  },
  {
    title: "sdk_help",
    description: "Главная страница проекта с навигацией к играм и ресурсам.",
    fileName: "index.html",
    tags: ["landing", "hub"],
    openHref: "/preview/index",
    sourceHref: SOURCE_URL,
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <AuthorHeader />
          <ThemeToggle />
        </div>
      </header>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10 flex flex-col gap-6">
        {/* Section title */}
        <div className="flex flex-col gap-1">
          <h1 className="text-lg font-semibold tracking-tight">Projects</h1>
          <p className="text-sm text-muted">
            Browse and open projects below.
          </p>
        </div>

        {/* Project cards */}
        <div className="flex flex-col gap-4">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.fileName} {...project} />
          ))}
        </div>

        {/* Footer */}
        <footer className="pt-6 border-t border-border text-xs font-mono text-muted text-center">
          register-web/sdk_help
        </footer>
      </div>
    </main>
  );
}
