'use client';

// Libs
import { useEffect, useState } from 'react';

import { usePathname } from 'next/navigation';

import axios from 'axios';
import CopyToClipboard from 'react-copy-to-clipboard';
import { FiEdit, FiSave, FiTrash2 } from 'react-icons/fi';
import {
  HiOutlineClipboard,
  HiOutlineClipboardCheck,
  HiOutlineShare,
  HiShare,
} from 'react-icons/hi';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  atomDark,
  vscDarkPlus,
} from 'react-syntax-highlighter/dist/esm/styles/prism';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';

import Container from '@components/container';
import Loading from '@components/loading';
// Components
import PageInfo from '@components/page-info';

// Styles
import '@styles/_work-page.scss';

interface IWorkProps {}

export default function Work(props: IWorkProps) {
  // Destructure props
  const {} = props;
  const pathname = usePathname();
  const workName = pathname.split('/')[2];

  // States
  const [work, setWork] = useState<any>({
    content: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isShared, setIsShared] = useState(false);

  // Effects
  useEffect(() => {
    const fetchContent = async () => {
      setIsLoading(true);
      const { data } = await axios.get(`/api/works/detail/${workName}`);
      setWork(data?.data);
      setIsLoading(false);
    };

    if (workName && work?.content === '') {
      fetchContent();
    }
  }, [workName]);

  return (
    <div className="work-page">
      <Container className="work-page-container">
        <PageInfo
          title={work?.title || '...'}
          description={work?.description || '...'}
        />

        {isEditMode && (
          <textarea
            className="markdown-editor"
            style={{ width: '100%' }}
            value={work?.content}
            onChange={(e) => {
              setWork({
                ...work,
                content: e.target.value,
              });
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

  const match = /language-(\w+)/.exec(className || '');

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
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    </div>
  ) : (
    <code {...rest} className={className}>
      {children}
    </code>
  );
};
