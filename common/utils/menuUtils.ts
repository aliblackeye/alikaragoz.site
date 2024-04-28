import { createElement } from 'react';

import MENU from '@layouts/menu';

export const createMenu = (menu: MENU[]): MENU[] => {
  return menu.map((item: MENU) => {
    return {
      key: item.key,
      label: item.label,
      icon: item.icon ? createElement(item.icon, { size: 16 }) : undefined,
      href: item.href || '#',
      type: item.type || 'item',
      disabled: item.disabled || false,
      onSelect: item.onSelect || undefined,
      children: item.children ? createMenu(item.children) : undefined,
    } as MENU;
  }) as MENU[];
};
