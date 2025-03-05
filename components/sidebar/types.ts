import React from 'react';

export type SidebarItemProps = {
  icon: React.ElementType;
  label: string;
  href: string;
  isActive?: boolean;
  hasSubmenu?: boolean;
  isSubmenuOpen?: boolean;
  onToggleSubmenu?: () => void;
  showPlusIcon?: boolean;
};

export type SidebarSubmenuItemProps = {
  label: string;
  href: string;
  isActive?: boolean;
};

export type SidebarIconProps = {
  icon: React.ElementType;
  href: string;
  isActive?: boolean;
};

export type SidebarContextType = {
  isExpanded: boolean;
  toggleSidebar: () => void;
  setExpanded: (value: boolean) => void;
  activeTab: string;
  setActiveTab: (value: string) => void;
  openMenus: Record<string, boolean>;
  toggleMenu: (menu: string) => void;
  setOpenMenus: (menus: { [key: string]: boolean }) => void;
};
