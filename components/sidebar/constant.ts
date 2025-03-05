import {
  Home,
  LayoutDashboard,
  FolderKanban,
  CheckSquare,
  Settings,
  MessageSquare,
} from 'lucide-react';

export const SIDEBAR_ITEMS = [
  { icon: Home, label: 'Home', href: '/home' },
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: FolderKanban, label: 'Projects', href: '/projects' },
  { icon: CheckSquare, label: 'Tasks', href: '/tasks' },
  {
    icon: Settings,
    label: 'Settings',
    href: '/settings',
    hasSubmenu: true,
    submenu: [
      { label: 'My details', href: '/settings/details' },
      { label: 'My profile', href: '/settings/profile' },
      { label: 'Security', href: '/settings/security' },
      { label: 'Integrations', href: '/settings/integrations' },
      { label: 'Billing', href: '/settings/billing' },
    ],
  },
  { icon: MessageSquare, label: 'Messages', href: '/messages' },
];
