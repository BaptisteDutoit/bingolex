import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";


export const metadata: Metadata = {
  title: "BingoLex 2025",
  description: "Bingo 2025 de Lexane et Baptiste",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" data-theme="autumn">
        <body
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
