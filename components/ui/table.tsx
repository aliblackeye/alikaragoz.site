'use client';

import {
  forwardRef,
  HTMLAttributes,
  ReactNode,
  TdHTMLAttributes,
  ThHTMLAttributes,
  useCallback,
  useMemo,
} from 'react';

import { useI18n } from '@locales/client';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

import { COLORS } from '@constants/colors';
import ICONS from '@constants/icons';
import { FONT_SIZE } from '@constants/sizes';
import { BUTTON_STATUS, STATUS } from '@constants/status';
import { WEIGHT } from '@constants/weight';

import { cn } from '@utils/cn';

import { Button } from './form-elements/button';
import { Text } from './text';

const TableComp = forwardRef<
  HTMLTableElement,
  HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={cn('w-full caption-bottom text-sm', className)}
      {...props}
    />
  </div>
));
TableComp.displayName = 'Table';

const TableHeader = forwardRef<
  HTMLTableSectionElement,
  HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn('[&_tr]:border-b', className)} {...props} />
));
TableHeader.displayName = 'TableHeader';

const TableBody = forwardRef<
  HTMLTableSectionElement,
  HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn('[&_tr:last-child]:border-0', className)}
    {...props}
  />
));
TableBody.displayName = 'TableBody';

const TableFooter = forwardRef<
  HTMLTableSectionElement,
  HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      'border-t bg-muted/50 font-medium [&>tr]:last:border-b-0',
      className
    )}
    {...props}
  />
));
TableFooter.displayName = 'TableFooter';

const TableRow = forwardRef<
  HTMLTableRowElement,
  HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      'border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted',
      className
    )}
    {...props}
  />
));
TableRow.displayName = 'TableRow';

const TableHead = forwardRef<
  HTMLTableCellElement,
  ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      'h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0',
      className
    )}
    {...props}
  />
));
TableHead.displayName = 'TableHead';

const TableCell = forwardRef<
  HTMLTableCellElement,
  TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn('p-4 align-middle [&:has([role=checkbox])]:pr-0', className)}
    {...props}
  />
));
TableCell.displayName = 'TableCell';

const TableCaption = forwardRef<
  HTMLTableCaptionElement,
  HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn('mt-4 text-sm text-muted-foreground', className)}
    {...props}
  />
));
TableCaption.displayName = 'TableCaption';

interface ITableProps<TData, TValue> {
  caption?: string;
  data: any[];
  columns: ColumnDef<TData, TValue>[];
  tableHeader?: ReactNode;
  tableFooter?: ReactNode;
  refetch?: () => void;
  loading?: boolean;
  dataUpdatedAt?: number;
  title?: string;
}

const Table = <TData, TValue>(props: ITableProps<TData, TValue>) => {
  const {
    caption,
    data,
    columns,
    tableHeader,
    tableFooter,
    refetch,
    loading,
    dataUpdatedAt,
    title,
  } = props;

  // Variables
  const t = useI18n() as any;

  const tableColumns = useMemo(
    () =>
      columns.map((column) => {
        return {
          ...column,
          header:
            typeof column.header === 'string'
              ? t(column.header)
              : column.header,
        };
      }),
    []
  ) as ColumnDef<TData, TValue>[];

  const table = useReactTable({
    data,
    columns: tableColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="table-wrapper">
      {tableHeader && (
        <div
          className={cn(
            'table-header-wrapper',
            'mb-4 flex w-full justify-between'
          )}
        >
          <div>
            <Text
              element="span"
              size={FONT_SIZE.XS}
              weight={WEIGHT.MEDIUM}
              color={COLORS.gray[400]}
            >
              {title}
            </Text>
          </div>
          <div className="flex w-fit">
            {dataUpdatedAt && (
              <div className="mr-2 flex flex-col text-end">
                <Text
                  element="span"
                  size={FONT_SIZE.XS}
                  weight={WEIGHT.MEDIUM}
                  color={COLORS.gray[400]}
                >
                  {t('COMPONENTS.TABLE.LAST_UPDATED')}
                </Text>
                <div className="flex gap-1">
                  <Text
                    element="span"
                    size={FONT_SIZE.XS}
                    weight={WEIGHT.MEDIUM}
                    color={COLORS.gray[400]}
                  >
                    {new Date(dataUpdatedAt).toLocaleString().split(' ')[1]}
                  </Text>
                  <Text
                    element="span"
                    size={FONT_SIZE.XS}
                    weight={WEIGHT.MEDIUM}
                    color={COLORS.gray[400]}
                  >
                    {new Date(dataUpdatedAt).toLocaleString().split(' ')[0]}
                  </Text>
                </div>
              </div>
            )}
            {refetch && (
              <div className="refetch-wrapper flex justify-end">
                <Button
                  onClick={refetch}
                  className="mr-2"
                  status={BUTTON_STATUS.TERTIARY}
                  loading={loading}
                  icon={{ iconType: ICONS.REFRESH, status: STATUS.PRIMARY }}
                />
              </div>
            )}
            {tableHeader}
          </div>
        </div>
      )}
      <TableComp>
        {caption && <TableCaption>{caption}</TableCaption>}

        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && 'selected'}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </TableComp>
      <div className={cn('table-footer-wrapper', 'flex w-full justify-end')}>
        {tableFooter}
      </div>
    </div>
  );
};

export {
  Table,
  TableComp,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
};
