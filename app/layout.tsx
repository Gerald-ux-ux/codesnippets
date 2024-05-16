import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "../lib/utils";

// Global font
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Code Snippets - Boost your productivity",
  description: "Copy and paste your snippet of choice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          jetBrainsMono.className,
          "text-primary h-screen   w-full  pt-4 pb-4 flex flex-col "
        )}
      >
        {children}
      </body>
    </html>
  );
}
