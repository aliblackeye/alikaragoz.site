'use client';

import useSidebar from '@store/use-sidebar';

import ICONS from '@constants/icons';
import { STATUS } from '@constants/status';

import { cn } from '@utils/cn';

import { Icon } from '@components/ui/icon';

import SidebarFooter from './_partials/sidebar-footer';
import SidebarHeader from './_partials/sidebar-header';
import SidebarItems from './_partials/sidebar-items';

interface ISidebarProps {}

export default function Sidebar(props: ISidebarProps) {
  // Props
  const {} = props;

  // Store
  const { isSidebarOpen, setIsSidebarOpen } = useSidebar();

  return (
    <aside
      className={cn(
        'sidebar fixed left-0 h-full',

        {
          'w-[280px] min-w-[280px]': isSidebarOpen,
          'w-16 min-w-16': !isSidebarOpen,
        }
      )}
    >
      {/* SIDEBAR CONTAINER */}
      <div
        className={cn(
          'sidebar-container',
          'flex flex-col justify-between',
          'relative h-screen min-h-full w-full border-r  border-r-gray-200 bg-white transition-all duration-300'
        )}
      >
        <div className="sidebar-container__top">
          <SidebarHeader />
          <SidebarItems />
        </div>

        <div className="sidebar-container__bottom">
          <SidebarFooter />
        </div>
      </div>
      <div
        className={cn(
          'close-sidebar-icon',
          'absolute right-0 top-0',
          'bg-danger-900 block sm:hidden'
        )}
      >
        <Icon
          icon={ICONS.CLOSE_CIRCLE}
          status={STATUS.PRIMARY}
          onClick={() => {
            setIsSidebarOpen(!isSidebarOpen);
          }}
        />
      </div>
    </aside>
  );
}
