import { ReactNode } from "react";
import {
  Table as NextTable,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue,
} from "@nextui-org/react";
import { useI18n } from "@locales/client";

export type ColumnProps = {
  dataIndex: string;
  label?: string;
  render?: (value: any, rowData: any) => ReactNode;
};

interface ITableProps {
  data: any[];
  columns: ColumnProps[];
  emptyContent?: ReactNode;
  hideHeader?: boolean;
  removeWrapper?: boolean;
}

export default function Table(props: ITableProps) {
  // Props
  const { data, columns, emptyContent, hideHeader, removeWrapper } = props;

  const t = useI18n() as any;

  return (
    <NextTable hideHeader={hideHeader} removeWrapper={removeWrapper}>
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.dataIndex}>
            {t(column.label) ?? column.render(undefined, undefined)}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody
        items={data.map((d, index: number) => {
          if (d.key) return d;
          return { ...d, key: index };
        })}
        emptyContent={`${
          emptyContent
            ? typeof emptyContent === "string"
              ? t(emptyContent)
              : emptyContent
            : t("COMPONENTS.TABLE.EMPTY_CONTENT")
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
                    ? columnFound.render(item[columnFound.dataIndex], item)
                    : getKeyValue(item, columnKey)}
                </TableCell>
              );
            }}
          </TableRow>
        )}
      </TableBody>
    </NextTable>
  );
}
