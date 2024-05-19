'use client';

import React, { createElement, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import useSidebar from '@store/use-sidebar';

import { COLORS } from '@constants/colors';
import ICONS from '@constants/icons';
import { BUTTON_SIZE, FONT_SIZE, SIZE } from '@constants/sizes';
import { BUTTON_STATUS, STATUS } from '@constants/status';
import { WEIGHT } from '@constants/weight';

import { cn } from '@utils/cn';
import { capitalize } from '@utils/textUtils';

import MENU from '@layouts/menu';

import { Button } from '@components/ui/form-elements/button';
import { Icon } from '@components/ui/icon';
import { Skeleton } from '@components/ui/skeleton';
import { Text } from '@components/ui/text';

export default function SidebarFooter() {
  // Store
  const { isSidebarOpen, setIsSidebarOpen } = useSidebar();

  // Variables
  const pathname = usePathname();

  // Router
  const router = useRouter();

  // States
  const [activeKeys] = useState<string[]>([]);

  return (
    <div className={cn('sidebar-footer', 'flex flex-col ')}>
      <div
        className={cn('sidebar-footer-actions', {
          'p-4': isSidebarOpen,
          'p-1': !isSidebarOpen,
        })}
      >
        <div className="mb-6 flex flex-col gap-2">
          {MENU.filter((item) => item.bottom).map((item, index) => {
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
        {/* USER ACTIONS */}
        <div className="flex gap-3 border-t-2  border-gray-200 px-2 pb-4 pt-6">
          {true ? (
            <Skeleton className="h-[40px] w-[40px] rounded-full" />
          ) : (
            <Image
              src={'/images/avatar.png'}
              className="flex h-[40px] min-h-[40px] w-[40px] min-w-[40px] items-center justify-center overflow-clip rounded-full border border-gray-200"
              width={200}
              height={200}
              alt="Avatar"
            />
          )}
          <div className="relative flex min-w-[151px] flex-col justify-center">
            <Text
              element="h1"
              size={FONT_SIZE.SM}
              color={COLORS.gray[700]}
              weight={WEIGHT.SEMIBOLD}
            >
              {'aliblackeye' ? (
                `${capitalize('aliblackeye'?.split('.')[0] || '')}
              ${capitalize('aliblackeye'?.split('.')[1] || '')}`
              ) : (
                <Skeleton className="mb-1 h-3 w-20" />
              )}
            </Text>
            <Text
              element="span"
              size={FONT_SIZE.SM}
              color={COLORS.gray[600]}
              weight={WEIGHT.REGULAR}
            >
              {<Skeleton className="h-3 w-full" />}
            </Text>
            <Button
              status={BUTTON_STATUS.TERTIARY}
              size={BUTTON_SIZE.SM}
              variant="ghost"
              icon={{
                iconType: ICONS.LOGOUT,
                size: 20,
                color: COLORS.gray[500],
              }}
              className="absolute -right-8 -top-2"
              loading={false}
              onClick={() => {
                sessionStorage.removeItem('username');
                sessionStorage.removeItem('password');
                router.push('/api/auth/logout');
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
