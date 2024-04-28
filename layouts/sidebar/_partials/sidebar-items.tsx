import { createElement, useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import useSidebar from '@store/use-sidebar';

import { COLORS } from '@constants/colors';
import ICONS from '@constants/icons';
import { SIZE } from '@constants/sizes';
import { STATUS } from '@constants/status';

import { cn } from '@utils/cn';

import MENU from '@layouts/menu';

import { Icon } from '@components/ui/icon';

export default function SidebarItems() {
  // Store
  const { isSidebarOpen, setIsSidebarOpen } = useSidebar();

  // Variables
  const pathname = usePathname();

  // States
  const [activeKeys] = useState<string[]>([]);

  return (
    <div
      className={cn('sidebar-items', 'flex flex-col gap-1', {
        'p-4': isSidebarOpen,
        'p-1': !isSidebarOpen,
      })}
    >
      {MENU.filter((item) => !item.bottom).map((item, index) => {
        // eslint-disable-next-line react/no-children-prop
        return createElement(item.href ? Link : 'div', {
          ...{
            href: item.href || '#',
            className: cn(`sidebar-item`, {
              // /console/dashboard
              'bg-gray-50 hover:bg-gray-100':
                pathname.split('/')[1] === item.href?.replace('/', ''),
              'py-2 px-2': !isSidebarOpen,
            }),
            key: index,
          },

          children: (
            <>
              {item.icon && (
                <Icon
                  icon={item.icon}
                  color={COLORS['gray']['500']}
                  size={SIZE.XL}
                />
              )}
              <span
                className={cn('label', 'flex-1', {
                  hidden: !isSidebarOpen,
                })}
              >
                {item.label}
              </span>
              {isSidebarOpen &&
                item?.children &&
                item?.children?.length > 0 && (
                  <Icon
                    className="ml-auto"
                    icon={
                      activeKeys.findIndex((f) => f === item.key)
                        ? ICONS.CHEVRON_DOWN
                        : ICONS.CHEVRON_UP
                    }
                    status={STATUS.BLACK}
                    size={SIZE.XL}
                  />
                )}
            </>
          ),
        });
      })}
    </div>
  );
}
