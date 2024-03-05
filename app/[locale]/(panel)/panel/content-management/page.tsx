'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';

import { EditorAPI } from '@apis/EditorAPI';
import { AiOutlineDelete } from 'react-icons/ai';
import { BiPlus } from 'react-icons/bi';
import { BsEye } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';

import STATUS from '@constants/status';

import Button from '@components/button';
import Popconfirm from '@components/popconfirm';
import Table, { ColumnProps } from '@components/table';
import Tooltip from '@components/tooltip';

import ContentEditor from './_partials/ContentEditor';

import '@styles/_content-management.scss';

export default function ContentManagement() {
  // States
  const [works, setWorks] = useState([]);
  const [visibleConfirmKey, setVisibleConfirmKey] = useState(null);
  const [visible, setVisible] = useState(false);
  const [work, setWork] = useState(null);

  // Functions
  const columns: ColumnProps[] = [
    {
      dataIndex: 'image',
      label: 'COMPONENTS.TABLE.COLUMNS.LABELS.COVER',
      render: (value) => {
        return (
          <Image
            src={value}
            alt="cover"
            width={1920}
            height={1920}
            className="work-cover-image"
          />
        );
      },
    },
    {
      dataIndex: 'title',
      label: 'COMPONENTS.TABLE.COLUMNS.LABELS.TITLE',
    },
    {
      dataIndex: 'description',
      label: 'COMPONENTS.TABLE.COLUMNS.LABELS.DESCRIPTION',
    },
    {
      dataIndex: 'views',
      label: 'COMPONENTS.TABLE.COLUMNS.LABELS.VIEWS',
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
      render: (_value, row, index) => {
        return (
          <div className="flex gap-2">
            <Tooltip content="Read">
              <div>
                <Button
                  icon={<BsEye size={16} />}
                  onClick={() => {
                    window.open(window.location.origin + '/work/' + row.href);
                  }}
                  status={STATUS.PRIMARY}
                />
              </div>
            </Tooltip>

            <Tooltip content="Edit">
              <div>
                <Button
                  icon={<FiEdit size={16} />}
                  onClick={() => {
                    setWork(row);
                    setVisible(true);
                  }}
                  status={STATUS.SECONDARY}
                />
              </div>
            </Tooltip>

            <Tooltip content="Delete">
              <div>
                <Popconfirm
                  isOpen={visibleConfirmKey === index}
                  label={'COMPONENTS.POPCONFIRM.DELETE'}
                  onCancel={() => {
                    setVisibleConfirmKey(null);
                  }}
                  onConfirm={() => {
                    EditorAPI.delete(row.id).then((res) => {
                      if (res?.data?.success) {
                        EditorAPI.list().then((res) => {
                          setWorks(res?.data?.data);
                        });
                      }
                    });
                    setVisibleConfirmKey(null);
                  }}
                >
                  <div>
                    <Button
                      icon={<AiOutlineDelete size={16} />}
                      onClick={() => {
                        setVisibleConfirmKey(index);
                      }}
                      status={STATUS.DANGER}
                    />
                  </div>
                </Popconfirm>
              </div>
            </Tooltip>
          </div>
        );
      },
    },
  ];

  // Effects
  useEffect(() => {
    EditorAPI.list().then((res) => {
      setWorks(res?.data?.data);
    });
  }, []);

  return (
    <section className="content-management-section">
      <Table
        data={works}
        columns={columns}
        tableHeader={
          <>
            <Button
              label="FORM_ELEMENTS.CTA.ADD_NEW_WORK"
              icon={<BiPlus size={16} />}
              status={STATUS.PRIMARY}
              onClick={() => {
                setVisible(true);
              }}
            />
          </>
        }
      />

      <ContentEditor
        visible={visible}
        work={work}
        setVisible={setVisible}
        setWork={setWork}
      />
    </section>
  );
}
