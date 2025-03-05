'use client';

import type { ReactNode } from 'react';
import { Navbar } from '@/components/navbar/navbar';
import { Sidebar } from '@/components/sidebar/sidebar';

type AppLayoutProps = {
  children: ReactNode;
};

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex h-screen">
      <div className="hidden md:block">
        <Sidebar />
      </div>

      <div className={'flex flex-col flex-1 transition-all duration-300'}>
        <Navbar />
        <div className="flex relative md:hidden">
          <div className="absolute bg-white">
            <Sidebar />
          </div>
        </div>
        <main className="flex-1 p-6 ml-14 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
