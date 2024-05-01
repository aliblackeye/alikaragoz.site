'use client';

import { useEffect, useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { UseQueryResult } from '@tanstack/react-query';
import MDEditor from '@uiw/react-md-editor';
import { AxiosResponse } from 'axios';
import { useForm } from 'react-hook-form';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';
import { z } from 'zod';

import { useFetcher } from '@hooks/use-fetcher';

import { TYPES } from '@configs/typesConfig';

import { FILE_TYPES } from '@constants/file-types';
import { BUTTON_SIZE } from '@constants/sizes';
import { BUTTON_STATUS } from '@constants/status';

import { createNotification } from '@utils/createNotification';

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
  fetchWorks: UseQueryResult<
    {
      response: AxiosResponse<any, any>;
      data: any;
    },
    Error
  >;
}
const formSchema = z.object({
  title: z.string({ message: 'This field is required!' }).min(3).max(50),
  description: z.string().min(3).max(100),
  href: z
    .string({ message: 'This field is required!' })
    .min(3)
    .max(50)
    .refine((value) => {
      // sadece harf, tire ve sayı içerebilir
      return /^[a-zA-Z0-9-]*$/.test(value);
    }),

  // file tipinde veya url olabilir
  image: z.any(),
  content: z.string({ message: 'This field is required!' }).min(3),
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
  const { work, setWork, visible, setVisible, fetchWorks } = props;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: work?.title,
      description: work?.description,
      href: work?.href,
      image: work?.image,
      content: work?.content,
      category: work?.category,
    },
  });

  // States
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // Fetchers
  const updateContent = useFetcher(TYPES.PUT_WORK_UPDATE).action();
  const createContent = useFetcher(TYPES.POST_WORK_CREATE).action();

  // Functions
  const handleClose = () => {
    setWork(null);
    setVisible(false);
    setSelectedFile(null);
    form.reset();
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const formData = new FormData();
    formData.append('title', values.title);
    formData.append('description', values.description);
    formData.append('href', values.href);
    formData.append('content', values.content);
    formData.append('image', selectedFile || values.image);
    formData.append('category', values.category);

    if (work?.id) {
      updateContent.mutateAsync([formData, [work?.id]]).then(() => {
        fetchWorks.refetch();
        createNotification({
          title: 'Success!',
          description: 'Work updated successfully.',
          status: 'success',
        });
        handleClose();
      });
    } else {
      createContent.mutateAsync(formData).then((res) => {
        handleClose();
        createNotification({
          title: 'Success!',
          description: 'Work created successfully.',
          status: 'success',
        });
        fetchWorks.refetch();
      });
    }
  };

  return (
    <>
      <Dialog
        open={visible}
        width={1500}
        style={{ minHeight: '65%' }}
        onOpenChange={(open) => {
          if (updateContent.isPending || createContent.isPending) return;
          setVisible(open);

          if (!open) {
            handleClose();
          }
        }}
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
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
                    <Select
                      {...field}
                      onChange={field.onChange}
                      groups={categories}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>FORM_ELEMENTS.LABELS.IMAGE</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      label={`FORM_ELEMENTS.LABELS.IMAGE`}
                      placeholder={`FORM_ELEMENTS.PLACEHOLDERS.SELECT_IMAGE`}
                      value={
                        !work?.id || selectedFile
                          ? field?.value
                          : field?.value?.startsWith('/')
                            ? ''
                            : ''
                      }
                      onChange={(e) => {
                        setSelectedFile(e.target.files[0]);
                        field.onChange(e);
                      }}
                      type="file"
                      fileTypes={[
                        FILE_TYPES.JPG,
                        FILE_TYPES.PNG,
                        FILE_TYPES.JPEG,
                      ]}
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
                  <FormLabel>FORM_ELEMENTS.LABELS.CONTENT</FormLabel>
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
                label={`FORM_ELEMENTS.CTA.CANCEL`}
                disabled={createContent.isPending || updateContent.isPending}
                status={BUTTON_STATUS.WHITE}
                onClick={handleClose}
              />
              <Button
                size={BUTTON_SIZE.LG}
                loading={createContent.isPending || updateContent.isPending}
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
