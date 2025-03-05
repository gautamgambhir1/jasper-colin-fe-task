import Link from 'next/link';
import { cn } from '@/lib/utils';
import { SidebarSubmenuItemProps } from './types';

export const SidebarSubmenuItem = ({
  label,
  href,
  isActive = false,
}: SidebarSubmenuItemProps) => {
  return (
    <div className="relative mt-3">
      {label !== 'Billing' && (
        <>
          <div className="absolute left-5 top-2 h-full w-[2px] bg-gray-300 dark:bg-gray-200" />
          <div className="absolute left-5 -top-2 h-full w-[2px] bg-gray-300 dark:bg-gray-200" />
        </>
      )}
      <div className="relative flex items-center space-x-2">
        <div className="absolute left-[20px] top-[0px] w-6 h-5  border-b-2 border-l-2 border-gray-300 rounded-bl-[15px]"></div>
      </div>
      <Link
        href={href}
        className={cn(
          'flex items-center px-3 pl-11 rounded-md text-sm relative'
        )}
      >
        <span
          className={cn(
            isActive
              ? 'bg-accent/50 text-accent-foreground p-2'
              : 'text-muted-foreground hover:bg-accent/50 p-2 hover:text-accent-foreground'
          )}
        >
          {label}
        </span>
      </Link>
    </div>
  );
};
