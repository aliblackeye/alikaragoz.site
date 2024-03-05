import { useRef, useState } from 'react';

import { InputProps, Input as NextInput } from '@nextui-org/react';
import MDEditor, { commands } from '@uiw/react-md-editor';
import { CgClose } from 'react-icons/cg';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';

import STATUS from '@constants/status';

import Input from '@components/form-elements/input';
import Modal from '@components/modal';

interface IContentEditorProps {
  work: any;
  setWork: (work: any) => void;
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

export default function ContentEditor(props: IContentEditorProps) {
  // Props
  const { work, setWork, visible, setVisible } = props;

  // Refs
  const form = useRef<HTMLFormElement>(null);

  // Functions
  const handleClose = () => {
    setWork('');
    setVisible(false);
  };

  const handleCancel = () => {
    handleClose();
  };

  const handleSubmit = () => {
    console.log('submit');

    handleClose();
  };

  if (!visible) return null;

  return (
    <Modal
      title={
        work
          ? 'COMPONENTS.MODAL.TITLES.EDIT_WORK'
          : 'COMPONENTS.MODAL.TITLES.ADD_NEW_WORK'
      }
      isOpen={visible}
      onClose={handleClose}
      onConfirm={handleSubmit}
      confirmText="FORM_ELEMENTS.CTA.SAVE"
      confirmStatus={STATUS.SUCCESS}
      cancelText="FORM_ELEMENTS.CTA.CANCEL"
      size="5xl"
      onCancel={handleCancel}
    >
      <form ref={form}>
        <Input
          name="title"
          label="FORM_ELEMENTS.LABELS.TITLE"
          value={work?.title}
          onChange={(e) => setWork({ ...work, title: e.target.value })}
        />
        <Input
          name="description"
          label="FORM_ELEMENTS.LABELS.DESCRIPTION"
          value={work?.description}
          onChange={(e) => setWork({ ...work, description: e.target.value })}
        />
        <Input
          name="href"
          label="FORM_ELEMENTS.LABELS.LINK"
          value={work?.href}
          onChange={(e) => setWork({ ...work, href: e.target.value })}
        />
        <Input
          name="image"
          label="FORM_ELEMENTS.LABELS.IMAGE"
          type="file"
          id="image"
          accept="image/png, image/jpeg"
          onChange={(e) => {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
              setWork({ ...work, image: reader.result });
            };
            reader.readAsDataURL(file);
          }}

          // value={work?.image}
        />

        <MDEditor
          value={work?.content}
          onChange={(value) => {
            setWork({ ...work, content: value });
          }}
          style={{ minHeight: '92%', marginTop: '16px' }}
          previewOptions={{
            remarkPlugins: [[remarkGfm]],
            rehypePlugins: [[rehypeSanitize, rehypeRaw]],
          }}
        />
        {/* <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} /> */}
      </form>
    </Modal>
  );
}
