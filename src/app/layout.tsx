import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bobby's Photography | Wedding & Portrait Studio in Punjab, India",
  description:
    "Professional wedding photography, portraits, fashion, and editorial shoots. Bobby Sharma Photography captures your most precious moments with artistry and passion. Based in Ludhiana, Punjab.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-dark text-cream antialiased">
        {children}
      </body>
    </html>
  );
}
