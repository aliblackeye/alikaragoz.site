import dynamic from 'next/dynamic';

import { RichTextEditorProps } from './text-editor-provider';

const RichTextEditor = dynamic(
  () =>
    import('./text-editor-provider').then((mod) => mod.RichTextEditorProvider),
  { ssr: false }
);

export default function TextEditor(props: RichTextEditorProps) {
  return <RichTextEditor {...props} />;
}
