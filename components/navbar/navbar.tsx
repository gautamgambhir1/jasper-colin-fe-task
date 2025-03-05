'use client';

import { Menu, Bell, User } from 'lucide-react';
import { useSidebar } from '@/contexts/sidebar-context';

export function Navbar() {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="h-16 border-b flex items-center px-4 bg-background">
      <button
        onClick={toggleSidebar}
        className="md:hidden p-2 rounded-md hover:bg-muted"
      >
        <Menu className="h-5 w-5" />
      </button>
      <div className="ml-auto flex items-center space-x-4">
        <button className="p-2 rounded-md hover:bg-muted">
          <Bell className="h-5 w-5" />
        </button>
        <button className="p-2 rounded-md hover:bg-muted">
          <User className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
