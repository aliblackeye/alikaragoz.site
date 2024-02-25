"use client";
import { useEffect, useState } from "react";

import MDEditor, { commands } from "@uiw/react-md-editor";

import rehypeSanitize from "rehype-sanitize";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { EditorAPI } from "@apis/EditorAPI";
import Image from "next/image";
import { STATUS } from "@interfaces/status";

import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { BsEye } from "react-icons/bs";

import Table, { ColumnProps } from "@components/table";
import Tooltip from "@components/tooltip";
import Button from "@components/button";
import Popover from "@components/popover";

import "@styles/_content-management.scss";

export default function ContentManagement() {
  // States
  const [value, setValue] = useState("");
  const [works, setWorks] = useState([]);

  // Functions
  const columns: ColumnProps[] = [
    {
      dataIndex: "cover",
      label: "COMPONENTS.TABLE.COLUMNS.LABELS.COVER",
      render: (value) => (
        <Image
          src={value}
          alt="cover"
          width={1920}
          height={1920}
          className="work-cover-image"
        />
      ),
    },
    {
      dataIndex: "title",
      label: "COMPONENTS.TABLE.COLUMNS.LABELS.TITLE",
    },
    {
      dataIndex: "description",
      label: "COMPONENTS.TABLE.COLUMNS.LABELS.DESCRIPTION",
    },
    {
      dataIndex: "views",
      label: "COMPONENTS.TABLE.COLUMNS.LABELS.VIEWS",
      render: (value) => (
        <div className="flex items-center gap-1">
          <span>{value}</span>
          <BsEye className="work-views-icon" />
        </div>
      ),
    },
    {
      dataIndex: "actions",
      label: "COMPONENTS.TABLE.COLUMNS.LABELS.ACTIONS",
      render: () => (
        <>
          <Button
            icon={<BsEye size={16} />}
            onClick={() => {}}
            size="sm"
            className="mr-2"
            status={STATUS.PRIMARY}
          />
          <Tooltip content="sf">
            <Button
              icon={<FiEdit size={16} />}
              onClick={() => {}}
              size="sm"
              className="mr-2"
              status={STATUS.SECONDARY}
            />
          </Tooltip>
          <Popover content={"dsgsdgsdg"} placement="top">
            <Tooltip content="sf">
              <Button
                icon={<AiOutlineDelete size={16} />}
                onClick={() => {}}
                size="sm"
                status={STATUS.DANGER}
              />
            </Tooltip>
          </Popover>
        </>
      ),
    },
  ];

  const data = [
    {
      cover: "/images/mid-works/fake-for-me.png",
      title: "Fake For Me",
      description: "JsonGPT supported fake data generator.",
      views: "325",
    },
    {
      cover: "/images/mid-works/startup.png",
      title: "Digital Hive",
      description: "My startup company website.",
      views: "254",
    },
    {
      cover: "/images/mid-works/alypto-blockchain.png",
      title: "Alypto Blockchain",
      description: "Alypto Blockchain website.",
      views: "125",
    },
    {
      cover: "/images/mid-works/online-xox.png",
      title: "Online XOX",
      description: "An online XOX game. Also you can play offline.",
      views: "90",
    },
  ];

  // Effects
  useEffect(() => {
    EditorAPI.getAll().then((works) => setWorks(works?.data?.data));
  }, []);

  return (
    <section className="content-management-section">
      <Table data={data} columns={columns} />
      <div>
        {works?.map((work, index) => (
          <div key={index}>
            <h3>{work.title}</h3>
            <textarea value={work.content} />
          </div>
        ))}
      </div>
      <MDEditor
        value={value}
        onChange={setValue}
        previewOptions={{
          remarkPlugins: [[remarkGfm]],
          rehypePlugins: [[rehypeSanitize, rehypeRaw]],
        }}
      />
      <MDEditor.Markdown source={value} style={{ whiteSpace: "pre-wrap" }} />
    </section>
  );
}
