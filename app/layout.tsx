import React from "react";
import { Metadata } from "next";
import { Toaster } from "sonner";

import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { DialogsProvider } from "@/components/dialogs-provider";
import { RQProvider } from "@/components/rq-provider";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";

import "@/styles/globals.css";

//

export const metadata: Metadata = {
  title: "CTRD Admin Panel",
  description: "CTRD Admin Panel",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn("bg-background font-sans antialiased", fontSans.variable)}>
        <RQProvider>
          <DialogsProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              {children}
              <Toaster richColors />
              <TailwindIndicator />
            </ThemeProvider>
          </DialogsProvider>
        </RQProvider>
      </body>
    </html>
  );
}
