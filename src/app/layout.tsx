import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bobby's Photography | Wedding & Portrait Studio in Punjab",
  description:
    "Bobby Sharma Photography creates wedding and portrait imagery that feels personal, cinematic, and memorable. Based in Ludhiana, Punjab, India.",
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
