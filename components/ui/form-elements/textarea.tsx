import * as React from 'react';

import { cn } from '@utils/cn';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  resize?: boolean;
  limit?: number;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, resize, limit, ...rest }, ref) => {
    return (
      <div className="relative">
        <textarea
          className={cn(
            'general-transition ring-offset-primary-300 focus-visible:ring-primary-100 flex min-h-[80px] w-full rounded-md border border-gray-300 bg-white px-[14px] pb-[22px] pt-[12px] text-sm outline-none placeholder:text-gray-500 focus-visible:border-transparent focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          maxLength={limit}
          style={{
            resize: !resize ? 'none' : 'vertical',
          }}
          {...rest}
          ref={ref}
        />
        {limit && (
          <div className="absolute bottom-2 right-5 text-xs text-gray-400">
            {typeof rest.value === 'string' ? rest.value.length : 0}/{limit}
          </div>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export { Textarea };
