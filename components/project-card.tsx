import { ExternalLink, MessageCircle } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  fileName: string;
  tags: string[];
  openHref: string;
  sourceHref: string;
}

export function ProjectCard({
  title,
  description,
  fileName,
  tags,
  openHref,
  sourceHref,
}: ProjectCardProps) {
  return (
    <div className="group rounded-xl border border-border bg-card hover:bg-card-hover transition-all duration-200 hover:shadow-lg hover:shadow-foreground/5">
      <div className="p-6 flex flex-col gap-5">
        {/* Top row */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-subtle border border-border text-xs font-mono text-muted uppercase tracking-wider">
              Project
            </span>
          </div>
          <span className="text-xs font-mono text-muted">{fileName}</span>
        </div>

        {/* Title + description */}
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold tracking-tight text-foreground text-balance">
            {title}
          </h2>
          <p className="text-sm text-muted leading-relaxed">{description}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-mono border border-border text-muted bg-subtle"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-border" />

        {/* Actions */}
        <div className="flex flex-wrap gap-3">
          <a
            href={openHref}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-accent-fg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Open project
            <ExternalLink size={14} />
          </a>
          <a
            href={sourceHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-sm font-medium text-muted hover:text-foreground hover:border-foreground/30 transition-colors"
          >
            <MessageCircle size={14} />
            Source
          </a>
        </div>
      </div>
    </div>
  );
}
