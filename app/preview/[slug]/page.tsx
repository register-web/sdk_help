import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";

const FILE_MAP: Record<string, string> = {
  index: "index.html",
  gemini_rent: "gemini_rent.html",
};

export default async function PreviewPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const fileName = FILE_MAP[slug];
  if (!fileName) notFound();

  const filePath = path.join(process.cwd(), fileName);
  let html: string;
  try {
    html = fs.readFileSync(filePath, "utf-8");
  } catch {
    notFound();
  }

  // Serve the raw HTML as a full-page response via dangerouslySetInnerHTML trick.
  // We embed it in a frameless page that sets the document to the raw file content.
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>{`
          html, body { margin: 0; padding: 0; width: 100%; height: 100%; }
          iframe { display: block; width: 100%; height: 100vh; border: none; }
        `}</style>
      </head>
      <body>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const html = ${JSON.stringify(html)};
              const blob = new Blob([html], { type: 'text/html' });
              const url = URL.createObjectURL(blob);
              const iframe = document.createElement('iframe');
              iframe.src = url;
              iframe.style.cssText = 'display:block;width:100%;height:100vh;border:none;';
              iframe.allow = 'pointer-lock';
              document.body.appendChild(iframe);
            `,
          }}
        />
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return Object.keys(FILE_MAP).map((slug) => ({ slug }));
}
