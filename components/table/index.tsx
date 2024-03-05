import { ReactNode } from 'react';

import { useI18n } from '@locales/client';
import {
  getKeyValue,
  Table as NextTable,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react';

export type ColumnProps = {
  dataIndex: string;
  label?: string;
  render?: (value: any, rowData: any, index: number) => ReactNode;
};

interface ITableProps {
  data: any[];
  columns: ColumnProps[];
  emptyContent?: ReactNode;
  hideHeader?: boolean;
  removeWrapper?: boolean;
  tableHeader?: ReactNode;
}

export default function Table(props: ITableProps) {
  // Props
  const {
    data,
    columns,
    emptyContent,
    hideHeader,
    removeWrapper,
    tableHeader,
  } = props;

  const t = useI18n() as any;

  return (
    <div className="next-table">
      <div className="table-header mb-2 flex justify-end ">{tableHeader}</div>
      <NextTable hideHeader={hideHeader} removeWrapper={removeWrapper}>
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.dataIndex}>
              {t(column.label) ??
                column.render(undefined, undefined, undefined)}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody
          items={data?.map((d, index: number) => {
            if (d.key) return d;
            return { ...d, key: index };
          })}
          emptyContent={`${
            emptyContent
              ? typeof emptyContent === 'string'
                ? t(emptyContent)
                : emptyContent
              : t('COMPONENTS.TABLE.EMPTY_CONTENT')
          }`}
        >
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => {
                const columnFound = columns.find(
                  (c) => c.dataIndex === columnKey
                );

                return (
                  <TableCell>
                    {columnFound.render
                      ? columnFound.render(
                          item[columnFound.dataIndex],
                          item,
                          item.key
                        )
                      : getKeyValue(item, columnKey)}
                  </TableCell>
                );
              }}
            </TableRow>
          )}
        </TableBody>
      </NextTable>
    </div>
  );
}
