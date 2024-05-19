'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';

import { BsEye } from 'react-icons/bs';

import { Box } from '@components/box';
import { Button } from '@components/ui/form-elements/button';
import { Popconfirm } from '@components/ui/popconfirm';
import { Table } from '@components/ui/table';
import { Tooltip } from '@components/ui/tooltip';

import ContentCrud from './_partials/ContentCrud';

import '@styles/_content-management.scss';

import { ColumnDef } from '@tanstack/react-table';

import { useFetcher } from '@hooks/use-fetcher';

import { TYPES } from '@configs/typesConfig';

import ICONS from '@constants/icons';
import { BUTTON_STATUS, STATUS } from '@constants/status';

export type Payment = {
  id: string;
  amount: number;
  status: 'pending' | 'processing' | 'success' | 'failed';
  email: string;
};

export const payments: Payment[] = [
  {
    id: '728ed52f',
    amount: 100,
    status: 'pending',
    email: 'm@example.com',
  },
  {
    id: '489e1d42',
    amount: 125,
    status: 'processing',
    email: 'example@gmail.com',
  },
];

const others: ColumnDef<Payment>[] = [
  {
    accessorKey: 'amount',
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('amount'));
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
];

export default function ContentManagement() {
  // States
  const [works, setWorks] = useState([]);
  const [visible, setVisible] = useState(false);
  const [work, setWork] = useState(null);

  // Fetchers
  const deleteFetcher = useFetcher(TYPES.DELETE_WORK).action();
  const worksFetcher = useFetcher(TYPES.GET_WORKS_LIST).render();

  const columns: ColumnDef<any>[] = [
    {
      accessorKey: 'image',
      header: 'COMPONENTS.TABLE.COLUMNS.LABELS.COVER',
      cell: ({ row }) => {
        return (
          <Image
            src={row.getValue('image')}
            alt="cover"
            width={1920}
            height={1920}
            className="work-cover-image min-h-[60px] min-w-[60px]"
          />
        );
      },
    },
    {
      accessorKey: 'title',
      header: 'COMPONENTS.TABLE.COLUMNS.LABELS.TITLE',
    },
    {
      accessorKey: 'description',
      header: 'COMPONENTS.TABLE.COLUMNS.LABELS.DESCRIPTION',
    },
    {
      accessorKey: 'views',
      header: 'COMPONENTS.TABLE.COLUMNS.LABELS.VIEWS',
      cell: ({ row }) => {
        return (
          <div className="flex items-center gap-1">
            <span>{row.getValue('views')}</span>
            <BsEye className="work-views-icon" />
          </div>
        );
      },
    },
    {
      header: 'COMPONENTS.TABLE.COLUMNS.LABELS.ACTIONS',
      cell: ({ row }) => {
        const original = row.original;

        return (
          <div className="flex gap-2">
            <Tooltip content="Read">
              <Button
                status={BUTTON_STATUS.TERTIARY}
                icon={{
                  iconType: ICONS.EYE,

                  status: STATUS.PRIMARY,
                }}
                onClick={() => {
                  window.open(
                    window.location.origin + '/work/' + original.href
                  );
                }}
              />
            </Tooltip>

            <Tooltip content="Edit">
              <Button
                icon={{
                  iconType: ICONS.EDIT,
                  status: STATUS.WHITE,
                }}
                status={BUTTON_STATUS.WARNING}
                onClick={() => {
                  setWork(original);
                  setVisible(true);
                }}
              />
            </Tooltip>

            <Tooltip content="Delete">
              <Popconfirm
                onConfirm={() => {
                  deleteFetcher
                    .mutateAsync([undefined, [original.id]])
                    .then(() => {
                      worksFetcher.refetch();
                    });
                }}
              >
                <Button
                  status={BUTTON_STATUS.DANGER}
                  icon={{
                    iconType: ICONS.DELETE,
                  }}
                />
              </Popconfirm>
            </Tooltip>
          </div>
        );
      },
    },
  ];

  // Effects
  useEffect(() => {
    if (worksFetcher?.data?.data?.data) {
      setWorks(worksFetcher.data.data?.data);
    }
  }, [worksFetcher?.data?.data?.data]);

  return (
    <section className="content-management-section">
      <Box>
        <Table
          data={works}
          columns={columns}
          refetch={worksFetcher.refetch}
          loading={worksFetcher.isFetching}
          dataUpdatedAt={worksFetcher.dataUpdatedAt}
          tableHeader={
            <>
              <Button
                label="FORM_ELEMENTS.CTA.ADD_NEW_WORK"
                icon={{
                  iconType: ICONS.PLUS,
                }}
                onClick={() => {
                  setVisible(true);
                  setWork(null);
                }}
              />
            </>
          }
        />
      </Box>

      <ContentCrud
        key={work?.id}
        visible={visible}
        work={work}
        setVisible={setVisible}
        setWork={setWork}
        fetchWorks={worksFetcher}
      />
    </section>
  );
}
