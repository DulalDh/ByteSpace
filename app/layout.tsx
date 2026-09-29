import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ByteSpace — Learn. Create. Grow.",
  description: "Discover practical courses and grow your skills with ByteSpace.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
