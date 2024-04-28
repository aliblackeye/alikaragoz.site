import Image from 'next/image';

import useSidebar from '@store/use-sidebar';

import { cn } from '@utils/cn';

export default function SidebarHeader() {
  // Store
  const { isSidebarOpen, setIsSidebarOpen } = useSidebar();

  return (
    <div
      className={cn(
        'sidebar-header',
        'flex select-none items-center gap-3',
        'w-full p-8',
        {
          'px-3 py-7': !isSidebarOpen,
        }
      )}
    >
      <Image
        src={`/images/${isSidebarOpen ? 'logo.svg' : 'logo-small.svg'}`}
        width={isSidebarOpen ? 142 : 40}
        height={isSidebarOpen ? 142 : 40}
        alt="sidebar-logo"
      />
      <div className="bg-success-50 text-success-700 rounded-2xl px-2 py-[2px] text-xs font-medium">
        BETA
      </div>
    </div>
  );
}
