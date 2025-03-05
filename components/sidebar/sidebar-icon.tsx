import Link from 'next/link';
import { cn } from '@/lib/utils';
import { SidebarIconProps } from './types';

export const SidebarIcon = ({
  icon: Icon,
  href,
  isActive = false,
}: SidebarIconProps) => {
  return (
    <Link
      href={href}
      className={cn(
        'flex items-center justify-center h-10 w-10 rounded-md my-1',
        isActive
          ? 'text-primary bg-primary/10'
          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
      )}
    >
      <Icon className="h-5 w-5" />
    </Link>
  );
};
