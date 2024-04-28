'use client';

import { useToast } from '@hooks/use-toast';

import { COLORS } from '@constants/colors';

import { cn } from '@utils/cn';

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from '@components/ui/toast';

import { Icon } from './icon';

// KULLANIM
/* onClick={() => {

  createNotification({
    status: 'danger',
    title: 'You submitted the following values:',
    description: (
      <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
        <code className="text-white">{JSON.stringify(data, null, 2)}</code>
      </pre>
    ),
    action: (
      <>
      <ToastAction
      className='mr-2 text-primary-700 hover:text-primary-900'
      onClick={
        () => {
          console.log("clicked 1")
        }

      } altText="Goto schedule to undo">Dismiss</ToastAction>

      <ToastAction
      onClick={
        () => {
          console.log("clicked 2")
        }

      }

      altText="Goto schedule to undo">Dismiss 2</ToastAction>
      </>
    ),
  });

}} */

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({
        id,
        title,
        description,
        icon,
        action,
        status,
        ...props
      }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid grid-flow-col gap-3">
              <div>
                <div
                  className={cn(
                    `rounded-full border-[6px] p-1`,
                    status === 'info' && `bg-white`,
                    status === 'success' && `border-success-50 bg-success-100`,
                    status === 'warning' && `border-warning-50 bg-warning-100`,
                    status === 'danger' && `border-danger-50 bg-danger-100`
                  )}
                >
                  <Icon
                    icon={icon.iconType}
                    size={24}
                    color={(COLORS as any)[status][600]}
                  />
                </div>
              </div>

              <div className="col-span-2">
                <div className="grid gap-1">
                  <ToastTitle> {title}</ToastTitle>
                  <ToastDescription>{description}</ToastDescription>
                </div>
              </div>
              <div className="flex flex-row space-x-2">{action}</div>
            </div>

            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
