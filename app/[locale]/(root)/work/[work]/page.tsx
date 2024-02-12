"use client";

// Libs
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import {
  atomDark,
  vscDarkPlus,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyToClipboard from "react-copy-to-clipboard";

// Components
import PageInfo from "@components/page-info";
import Container from "@components/container";
import axios from "axios";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import {
  HiOutlineClipboard,
  HiOutlineClipboardCheck,
  HiOutlineShare,
  HiShare,
} from "react-icons/hi";
import Loading from "@components/loading";
import { FiEdit, FiSave, FiShare2, FiTrash2 } from "react-icons/fi";

// Styles
import "@styles/_work-page.scss";
import { AiFillCopy, AiOutlineCopy } from "react-icons/ai";

interface IWorkProps {}

export default function Work(props: IWorkProps) {
  // Destructure props
  const {} = props;
  const pathname = usePathname();
  const workName = pathname.split("/")[2];

  // States
  const [work, setWork] = useState<any>({
    content: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isShared, setIsShared] = useState(false);

  // Effects
  useEffect(() => {
    const fetchContent = async () => {
      setIsLoading(true);
      const { data } = await axios.get(
        `https://fakefor.me/api/projects/works/getWorks`
      );
      const work = data?.data?.find((work: any) => work.href === workName);
      setWork(work);
      setIsLoading(false);
    };

    if (workName && work?.content === "") {
      fetchContent();
    }
  }, [workName]);

  return (
    <div className="work-page">
      <Container className="work-page-container">
        <PageInfo
          title={work?.title || "..."}
          description={work?.description || "..."}
        />

        <div className="work-page-actions">
          <button
            className="edit"
            onClick={() => {
              setIsEditMode(!isEditMode);
            }}
          >
            {isEditMode ? <FiSave /> : <FiEdit />}
          </button>

          <button
            disabled={isEditMode}
            className="delete"
            onClick={() => {
              prompt("Copy the link to delete", window.location.href);
            }}
          >
            <FiTrash2 />
          </button>
          <CopyToClipboard
            text={(() => {
              if (typeof window !== "undefined") {
                return window.location.href;
              }
            })()}
            onCopy={() => {
              setIsShared(true);
              setTimeout(() => {
                setIsShared(false);
              }, 1000);
            }}
          >
            <button disabled={isEditMode} className="share">
              {isShared ? <HiShare /> : <HiOutlineShare />}
            </button>
          </CopyToClipboard>
        </div>

        {isEditMode && (
          <textarea
            className="markdown-editor"
            style={{ width: "100%" }}
            value={work?.content}
            onChange={(e) => {
              setWork({
                ...work,
                content: e.target.value,
              });
              console.log(work?.content);
            }}
          />
        )}
        <ReactMarkdown
          components={{
            code: Code,
          }}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw, rehypeSanitize]}
        >
          {work?.content}
        </ReactMarkdown>

        {isLoading && <Loading />}
      </Container>
    </div>
  );
}

const Code = (props: any) => {
  const { children, className, node, ...rest } = props;

  const [isCopied, setIsCopied] = useState(false);

  const match = /language-(\w+)/.exec(className || "");

  return match ? (
    <div className={`code ${className}`}>
      <CopyToClipboard
        text={String(children)}
        onCopy={() => {
          setIsCopied(true);
          setTimeout(() => {
            setIsCopied(false);
          }, 1000);
        }}
      >
        <button className="copy-action">
          {isCopied ? <HiOutlineClipboardCheck /> : <HiOutlineClipboard />}
        </button>
      </CopyToClipboard>
      <SyntaxHighlighter
        {...rest}
        PreTag="div"
        language={match[1]}
        style={atomDark}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    </div>
  ) : (
    <code {...rest} className={className}>
      {children}
    </code>
  );
};
