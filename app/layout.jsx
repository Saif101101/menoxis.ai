import "./globals.css";

export const metadata = {
  title: "Menoxis — The Company Brain",
  description:
    "Menoxis builds the intelligence layer for modern organizations. It connects people, knowledge, decisions, workflows, systems, and AI into one living intelligence layer.",
  metadataBase: new URL("https://menoxis.com"),
  openGraph: {
    title: "Menoxis — The Company Brain",
    description:
      "One living intelligence system that understands your business, remembers everything, and helps your organization think, decide, and execute better.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#040208",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Fonts: loaded via link so the build never blocks on a font fetch.
            Display: Space Grotesk · Body: Inter · Mono: JetBrains Mono */}
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <style>{`
          :root {
            --font-display: 'Space Grotesk';
            --font-body: 'Inter';
            --font-mono: 'JetBrains Mono';
          }
        `}</style>
      </head>
      <body>
        <div className="page-bg" aria-hidden />
        <div className="page-grid" aria-hidden />
        {children}
        <div className="grain" aria-hidden />
      </body>
    </html>
  );
}
