import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "../lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Toaster } from "react-hot-toast";

// Global font
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Code Snippets - Boost your productivity",
  description: "Copy and paste your snippet of choice",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: { colorPrimary: "white" },
        baseTheme: dark,
      }}
    >
      <html
        lang="en"
        className={cn(
          jetBrainsMono.className,
          "text-primary h-screen   w-full  pt-4 pb-4 flex flex-col "
        )}
      >
        <body>
          {children}
          <Toaster
            position="top-center"
            reverseOrder={false}
            toastOptions={{
              duration: 3500,
            }}
          />
        </body>
      </html>
    </ClerkProvider>
  );
}
