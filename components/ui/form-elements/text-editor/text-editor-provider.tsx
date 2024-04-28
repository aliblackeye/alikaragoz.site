'use client';

import { useRef } from 'react';

import {
  MdFormatBold,
  MdFormatItalic,
  MdFormatListBulleted,
  MdFormatListNumbered,
  MdLink,
} from 'react-icons/md';

import 'react-quill/dist/quill.snow.css';

import ReactQuill, { Quill, ReactQuillProps } from 'react-quill';

export interface RichTextEditorProps extends ReactQuillProps {
  onChange: (value: string) => void;
  value: string;
}

const CustomToolbar = () => (
  <div id="toolbar">
    <button className="ql-bold">
      <MdFormatBold size={18} />
    </button>
    <button className="ql-italic">
      <MdFormatItalic size={18} />
    </button>
    {/* <button className="ql-fontSizeUp !p-0">
      <span className="text-md font-bold">H</span>
    </button>
    <button className="ql-fontSizeDown !p-0">
      <span className="text-sm font-bold">H</span>
    </button> */}
    {/* <button className="ql-blockquote">
      <MdFormatQuote size={18} />
    </button> */}
    <button className="ql-link">
      <MdLink size={18} />
    </button>
    {/* <button className="ql-image">
      <MdInsertPhoto size={18} />
    </button> */}
    <button className="ql-list" value="bullet" type="button">
      <MdFormatListBulleted size={18} />
    </button>
    <button className="ql-list" value="ordered" type="button">
      <MdFormatListNumbered size={18} />
    </button>
    {/* <button className="ql-insertHeart">♥</button> */}
    {/* <select className="ql-size">
      <option value="small"></option>
      <option selected></option>
      <option value="large"></option>
      <option value="huge"></option>
    </select> */}
  </div>
);

export function RichTextEditorProvider(props: RichTextEditorProps) {
  // Props
  const { value, onChange } = props;

  // Variables
  const quillRef: any = useRef(null);

  const Font = Quill.import('formats/font'); // <<<< ReactQuill exports it
  Font.whitelist = ['mirza', 'roboto']; // allow ONLY these fonts and the default
  Quill.register(Font, true);

  const icons = Quill.import('ui/icons');
  icons.bold = null;
  icons.italic = null;
  icons.blockquote = null;
  icons.link = null;
  icons.image = null;
  icons.list.bullet = null;
  icons.list.ordered = null;

  // Functions
  /* const fontSizeUp = useCallback(() => {
    const currentSize = quillRef.current?.getEditor().getFormat().size;

    let newSize = currentSize;

    switch (currentSize) {
      case 'small':
        newSize = undefined;
        break;

      case undefined:
        newSize = 'large';
        break;
      case 'large':
        newSize = 'huge';
        break;
      case 'huge':
        break;
      default:
        break;
    }

    quillRef.current?.getEditor().format('size', newSize);
  }, []);

  const fontSizeDown = useCallback(() => {
    const currentSize = quillRef.current?.getEditor().getFormat().size;

    let newSize = currentSize;

    switch (currentSize) {
      case 'small':
        break;
      case undefined:
        newSize = 'small';
        break;
      case 'large':
        newSize = undefined;
        break;
      case 'huge':
        newSize = 'large';
        break;
      default:
        break;
    }

    quillRef.current?.getEditor().format('size', newSize);
  }, []);
 */
  /* const insertHeart = useCallback(() => {
    const quill = quillRef.current?.getEditor();
    const range = quill?.getSelection();
    if (range && typeof range.index === 'number' && quill) {
      quill.insertText(range.index, '♥');
      quill.setSelection((range.index as any) + 1);
    }
  }, []); */

  return (
    <div id="text-editor">
      <CustomToolbar />
      <ReactQuill
        ref={quillRef}
        theme="snow"
        value={value}
        onChange={onChange}
        modules={{
          toolbar: {
            container: '#toolbar',
            handlers: {
              /* fontSizeUp: fontSizeUp,
              fontSizeDown: fontSizeDown, */
              /* insertHeart: insertHeart, */
            },
          },
        }}
      />
    </div>
  );
}
