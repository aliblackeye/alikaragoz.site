'use client';

import { ReactNode } from 'react';

import { IconType } from 'react-icons';

import ICONS from '@constants/icons';
import { BUTTON_SIZE } from '@constants/sizes';
import { BUTTON_STATUS } from '@constants/status';

import { Button } from '@components/ui/form-elements/button';

export type MENU = {
  key?: string;
  label?: string | JSX.Element;
  icon?: IconType;
  href?: string;
  children?: MENU[];
  onSelect?: (e: any) => void;
  type?: 'divider' | 'dashed';
  pageTitle?: string;
  navigationTabs?: {
    key: string;
    label: string;
    href: string;
  }[];
  bottom?: boolean;
  disabled?: boolean;
  hideHeader?: boolean;
  resetPadding?: boolean;
};

export const MENU: MENU[] = [];

export default MENU;
