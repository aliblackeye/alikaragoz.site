'use client';

import { useEffect } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import MDEditor from '@uiw/react-md-editor';
import { useForm } from 'react-hook-form';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';
import { z } from 'zod';

import { useFetcher } from '@hooks/use-fetcher';

import { TYPES } from '@configs/typesConfig';

import { BUTTON_SIZE } from '@constants/sizes';

import { Dialog } from '@components/ui/dialog';
import { Button } from '@components/ui/form-elements/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@components/ui/form-elements/form';
import { Input } from '@components/ui/form-elements/input';
import { Select } from '@components/ui/form-elements/select';

interface IContentCrudProps {
  work: any;
  setWork: (work: any) => void;
  visible: boolean;
  setVisible: (visible: boolean) => void;
  fetchWorks: () => void;
}

const formSchema = z.object({
  title: z.string().min(3, 'This field is required!').max(50),
  description: z.string().min(3, 'This field is required!').max(100),
  href: z
    .string()
    .min(3, 'This field is required!')
    .max(50)
    .refine((value) => {
      // sadece harf, tire ve sayı içerebilir
      return /^[a-zA-Z0-9-]*$/.test(value);
    }),
  image: z.any().refine((value) => {
    return typeof value === 'string' || value === null;
  }),
  content: z.string().min(3, 'This field is required!'),
  category: z.string().refine(
    (value) => {
      return ['Junior', 'Mid', 'Lead', 'Senior'].includes(value);
    },
    { message: 'This field is required!' }
  ),
});

const categories = [
  {
    options: [
      { label: 'Junior', value: 'Junior' },
      { label: 'Mid', value: 'Mid' },
      { label: 'Lead', value: 'Lead' },
      { label: 'Senior', value: 'Senior' },
    ],
  },
];

export default function ContentCrud(props: IContentCrudProps) {
  // Props
  const { work, setWork, visible, setVisible } = props;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
      href: '',
      image: '',
      content: '',
      category: '',
    },
  });

  // Fetchers
  const worksFetcher = useFetcher(TYPES.GET_WORKS_LIST).action();
  const updateFetcher = useFetcher(TYPES.PUT_WORK_UPDATE).action();

  // Functions
  const handleClose = () => {
    setWork(null);
    setVisible(false);
    form.reset();
  };

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    if (work?.id) {
      updateFetcher.mutateAsync([values, [work?.id]]).then(() => {
        worksFetcher.mutateAsync({});

        handleClose();
      });
    } else {
      updateFetcher.mutateAsync(values).then(() => {
        worksFetcher.mutateAsync({});
        handleClose();
      });
    }
  };

  useEffect(() => {
    // set form values
    if (work?.id) {
      form.reset({
        title: work.title,
        description: work.description,
        href: work.href,
        image: work.image,
        content: work.content,
        category: work.category,
      });
    }
  }, []);

  return (
    <>
      <Dialog
        open={visible}
        width={1500}
        style={{ minHeight: '65%' }}
        onOpenChange={(open) => {
          setVisible(open);

          if (!open) {
            setWork(null);
          }
        }}
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>FORM_ELEMENTS.LABELS.TITLE</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>FORM_ELEMENTS.LABELS.DESCRIPTION</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="href"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>FORM_ELEMENTS.LABELS.LINK</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>FORM_ELEMENTS.LABELS.CATEGORY</FormLabel>
                  <FormControl>
                    <Select {...field} groups={categories} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="image"
              render={({ field: { name, value } }) => (
                <FormItem>
                  <FormLabel>FORM_ELEMENTS.LABELS.IMAGE</FormLabel>
                  <FormControl>
                    <Input
                      name={name}
                      value={typeof value === 'string' ? null : value}
                      type="file"
                      accept=".png, .jpeg, .jpg"
                      required={!work?.id}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="content"
              render={({ field: { value, onChange } }) => (
                <FormItem>
                  <FormLabel />
                  <FormControl>
                    <MDEditor
                      onChange={onChange}
                      value={value}
                      previewOptions={{
                        remarkPlugins: [[remarkGfm]],
                        rehypePlugins: [[rehypeSanitize, rehypeRaw]],
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="mt-6 flex justify-end gap-2">
              <Button
                size={BUTTON_SIZE.LG}
                variant="outline"
                label={`FORM_ELEMENTS.CTA.CLOSE`}
                onClick={handleClose}
              />
              <Button
                size={BUTTON_SIZE.LG}
                type="submit"
                label={
                  work ? `FORM_ELEMENTS.CTA.SAVE` : `FORM_ELEMENTS.CTA.CREATE`
                }
              />
            </div>
          </form>
        </Form>
      </Dialog>
    </>
  );
}
