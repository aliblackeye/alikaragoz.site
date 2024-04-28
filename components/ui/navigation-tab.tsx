'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { COLORS } from '@constants/colors';
import { FONT_SIZE } from '@constants/sizes';
import { WEIGHT } from '@constants/weight';

import { cn } from '@utils/cn';

import { Text } from './text';

interface INavigationTabProps {
  navigationTabs: {
    key: string;
    label: string;
    href: string;
  }[];
}

export default function NavigationTab(props: INavigationTabProps) {
  // Props
  const { navigationTabs } = props;

  // Variables
  const pathname = usePathname();

  return (
    <div>
      <div className="flex gap-4 pt-[5px]">
        {navigationTabs?.map((tab) => (
          <Link
            href={tab.href}
            key={tab.key}
            className={cn(
              'general-transition border-b border-transparent px-1 pb-3',
              tab.href === pathname
                ? 'border-primary-700'
                : 'hover:border-gray-400'
            )}
          >
            <Text
              element="span"
              color={
                tab.href === pathname ? COLORS.primary[700] : COLORS.gray[500]
              }
              weight={WEIGHT.SEMIBOLD}
              size={FONT_SIZE.MD}
            >
              {tab.label}
            </Text>
          </Link>
        ))}
      </div>
    </div>
  );
}
