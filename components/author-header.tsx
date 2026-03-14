import Image from "next/image";
import { ExternalLink } from "lucide-react";

export function AuthorHeader() {
  return (
    <a
      href="https://t.me/lalala53s"
      target="_blank"
      rel="noreferrer"
      className="group flex items-center gap-3 py-1 w-fit"
    >
      <Image
        src="/avatar.jpg"
        alt="lalala53s avatar"
        width={40}
        height={40}
        className="rounded-full border border-border object-cover"
      />
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-foreground group-hover:underline underline-offset-2 flex items-center gap-1.5">
          lalala53s
          <ExternalLink size={11} className="text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
        </span>
        <span className="text-xs text-muted font-mono">t.me/lalala53s</span>
      </div>
    </a>
  );
}
