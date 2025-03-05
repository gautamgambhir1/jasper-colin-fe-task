import type { Metadata } from 'next';
import { Lexend } from 'next/font/google';
import type React from 'react';
import './globals.css';
import { SidebarProvider } from '@/contexts/sidebar-context';
import { ThemeProvider } from '@/providers/theme-provider';

const inter = Lexend({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jasper Colin: Sidebar',
  description:
    'A responsive sidebar application built with Next.js and Tailwind CSS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>{children}</SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

import './globals.css';
