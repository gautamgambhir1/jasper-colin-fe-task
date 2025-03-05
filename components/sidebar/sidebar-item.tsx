import { Minus, Plus } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { SidebarItemProps } from './types';

export const SidebarItem = ({
  icon: Icon,
  label,
  href,
  isActive = false,
  hasSubmenu = false,
  isSubmenuOpen = false,
  onToggleSubmenu,
  showPlusIcon = true,
}: SidebarItemProps) => {
  return (
    <div className="relative flex items-center">
      <Link
        href={href}
        className={cn(
          'flex items-center py-2 px-3 rounded-md group w-full',
          isActive ? 'text-primary' : 'text-foreground hover:bg-muted'
        )}
        onClick={(e) => {
          if (hasSubmenu && onToggleSubmenu) {
            e.preventDefault();
            onToggleSubmenu();
          }
        }}
      >
        <Icon className="h-5 w-5 shrink-0 mr-3" />
        <span className="text-sm">{label}</span>
      </Link>
      {hasSubmenu && (
        <button
          onClick={onToggleSubmenu}
          className="absolute right-2 p-1 rounded-md hover:bg-muted"
        >
          {isSubmenuOpen ? (
            <Minus className="h-4 w-4" />
          ) : showPlusIcon ? (
            <Plus className="h-4 w-4" />
          ) : null}
        </button>
      )}
    </div>
  );
};
