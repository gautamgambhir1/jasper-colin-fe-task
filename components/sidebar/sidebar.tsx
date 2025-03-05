'use client';

import { Search, LayoutGrid, MessageCircle, Sun } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import type React from 'react';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useSidebar } from '@/contexts/sidebar-context';
import { SIDEBAR_ITEMS } from './constant';
import { SidebarSubmenuItem, SidebarItem, SidebarIcon } from './index';

export function Sidebar() {
  const { isExpanded, activeTab, setActiveTab, openMenus, toggleMenu } =
    useSidebar();
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;
  const isActiveSubmenu = (basePath: string) => pathname.startsWith(basePath);
  const { setTheme, theme } = useTheme();

  return (
    <div className="flex h-screen">
      <div className="w-16 h-full border-r bg-background flex flex-col items-center py-4">
        <div
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          className="flex cursor-pointer items-center justify-center w-10 h-10 rounded-full text-white bg-orange-500 mb-6"
        >
          <Sun className='cursor-pointer' />
        </div>

        <div className="flex flex-col items-center space-y-1">
          {SIDEBAR_ITEMS.map((item) => (
            <SidebarIcon
              key={item.href}
              icon={item.icon}
              href={item.href}
              isActive={isActive(item.href)}
            />
          ))}
        </div>

        <div className="mt-auto flex flex-col items-center space-y-1">
          <SidebarIcon
            icon={LayoutGrid}
            href="/apps"
            isActive={isActive('/apps')}
          />
          <SidebarIcon
            icon={MessageCircle}
            href="/chat"
            isActive={isActive('/chat')}
          />

          <div className="mt-4 relative">
            <Image
              width={0}
              height={0}
              src="/avatar.png"
              alt="User avatar"
              className="w-10 h-10 rounded-full object-cover border-2 border-background"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></span>
          </div>
        </div>
      </div>

      {isExpanded && (
        <div className="w-64 h-full border-r bg-background flex flex-col">
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold mb-3">Overview</h2>

            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search" className="pl-9" />
            </div>

            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="mt-4"
            >
              <TabsList className="w-full grid grid-cols-2">
                <TabsTrigger value="my-account" className="text-xs">
                  My account
                </TabsTrigger>
                <TabsTrigger value="shared" className="text-xs">
                  Shared with me
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="flex-1 py-2 px-3 space-y-1">
            {SIDEBAR_ITEMS.map((item) => (
              <div key={item.href}>
                <SidebarItem
                  icon={item.icon}
                  label={item.label}
                  href={item.href}
                  isActive={
                    item.submenu
                      ? pathname.startsWith(item.href)
                      : isActive(item.href)
                  }
                  hasSubmenu={item.hasSubmenu}
                  isSubmenuOpen={openMenus[item.label]}
                  onToggleSubmenu={() => toggleMenu(item.label)}
                />
                {item.hasSubmenu && openMenus[item.label] && (
                  <div className="relative ml-2 space-y-1">
                    {item.submenu.map((subItem) => (
                      <SidebarSubmenuItem
                        key={subItem.href}
                        label={subItem.label}
                        href={subItem.href}
                        isActive={isActiveSubmenu(subItem.href)}
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
