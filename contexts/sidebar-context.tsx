'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from 'react';
import { SidebarContextType } from '@/components/sidebar/types';
import { useIsMobile } from '@/hooks/use-mobile';

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeTab, setActiveTab] = useState('my-account');
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({
    settings: true,
  });

  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) {
      setIsExpanded(false);
    } else {
      setIsExpanded(true);
    }
  }, [isMobile]);

  const toggleSidebar = () => {
    const newState = !isExpanded;
    setIsExpanded(newState);
  };

  const setExpanded = (value: boolean) => {
    setIsExpanded(value);
  };

  const toggleMenu = (menu: string) => {
    const newOpenMenus = {
      ...openMenus,
      [menu]: !openMenus[menu],
    };
    setOpenMenus(newOpenMenus);
  };

  return (
    <SidebarContext.Provider
      value={{
        isExpanded,
        toggleSidebar,
        setExpanded,
        activeTab,
        setActiveTab,
        openMenus,
        toggleMenu,
        setOpenMenus,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error('it must be used within a SidebarProvider');
  }
  return context;
}
