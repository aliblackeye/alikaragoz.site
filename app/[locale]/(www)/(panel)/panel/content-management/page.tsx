'use client';

import { useCallback, useEffect, useState } from 'react';

import Image from 'next/image';

import { AiOutlineDelete } from 'react-icons/ai';
import { BiPlus } from 'react-icons/bi';
import { BsEye } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';

import { Box } from '@components/box';
import { Button } from '@components/ui/form-elements/button';
import { Popconfirm } from '@components/ui/popconfirm';
import { Table } from '@components/ui/table';
import { Tooltip } from '@components/ui/tooltip';

import ContentCrud from './_partials/ContentCrud';

import '@styles/_content-management.scss';

import { useFetcher } from '@hooks/use-fetcher';

import { TYPES } from '@configs/typesConfig';

import ICONS from '@constants/icons';

export default function ContentManagement() {
  // States
  const [works, setWorks] = useState([]);
  const [visible, setVisible] = useState(false);
  const [work, setWork] = useState(null);

  // Fetchers
  const deleteFetcher = useFetcher(TYPES.DELETE_WORK).action();
  const worksFetcher = useFetcher(TYPES.GET_WORKS_LIST).action();

  const columns = [
    {
      dataIndex: 'image',
      label: 'COMPONENTS.TABLE.COLUMNS.LABELS.COVER',
      width: 70,
      render: (value) => {
        return (
          <Image
            src={value}
            alt="cover"
            width={1920}
            height={1920}
            className="work-cover-image min-h-[60px] min-w-[60px]"
          />
        );
      },
    },
    {
      dataIndex: 'title',
      label: 'COMPONENTS.TABLE.COLUMNS.LABELS.TITLE',
      width: 100,
    },
    {
      dataIndex: 'description',
      label: 'COMPONENTS.TABLE.COLUMNS.LABELS.DESCRIPTION',
      width: 600,
    },
    {
      dataIndex: 'views',
      label: 'COMPONENTS.TABLE.COLUMNS.LABELS.VIEWS',
      width: 50,
      render: (value) => (
        <div className="flex items-center gap-1">
          <span>{value}</span>
          <BsEye className="work-views-icon" />
        </div>
      ),
    },
    {
      dataIndex: 'actions',
      label: 'COMPONENTS.TABLE.COLUMNS.LABELS.ACTIONS',
      width: 50,
      render: (_value, row, index) => {
        return (
          <div className="flex gap-2">
            <Tooltip content="Read">
              <Button
                variant="outline"
                icon={{ iconType: ICONS.EYE }}
                onClick={() => {
                  window.open(window.location.origin + '/work/' + row.href);
                }}
              />
            </Tooltip>

            <Tooltip content="Edit">
              <Button
                icon={{
                  iconType: ICONS.EDIT,
                }}
                onClick={() => {
                  setWork(row);
                  setVisible(true);
                }}
              />
            </Tooltip>

            <Tooltip content="Delete">
              <Popconfirm
                label={'COMPONENTS.POPCONFIRM.DELETE'}
                onConfirm={() => {
                  deleteFetcher.mutateAsync([undefined, []]).then(() => {
                    fetchWorks();
                  });
                }}
              >
                <Button
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

  // Functions
  const fetchWorks = useCallback(() => {
    worksFetcher.mutateAsync({}).then((res) => {
      setWorks(res?.data?.data);
    });
  }, []);

  // Effects
  useEffect(() => {
    fetchWorks();
  }, []);

  return (
    <section className="content-management-section">
      <Box>
        <Table
          data={works}
          columns={columns}
          tableHeader={
            <>
              <Button
                label="FORM_ELEMENTS.CTA.ADD_NEW_WORK"
                icon={{
                  iconType: ICONS.PLUS,
                }}
                onClick={() => {
                  setVisible(true);
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
        fetchWorks={fetchWorks}
      />
    </section>
  );
}
