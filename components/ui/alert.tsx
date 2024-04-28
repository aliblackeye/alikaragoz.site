import * as React from 'react';

import { cva } from 'class-variance-authority';
import { FiAlertCircle, FiAlertTriangle, FiInfo } from 'react-icons/fi';
import { PiCheckCircleBold } from 'react-icons/pi';

import type { VariantProps } from 'class-variance-authority';

import { cn } from '@utils/cn';

// TODO : KULLANIMI
// import { Alert, AlertDescription, AlertTitle, AlertButton } from '@components/ui/alert';

// const [showAlert, setShowAlert] = useState(true);
// const handleCloseAlert = () => {
//   setShowAlert(false);
// };

{
  /* 
  {showAlert && ( 
    <Alert variant="success" onClose={handleCloseAlert}>
  <AlertTitle>Successfully updated profile</AlertTitle>
  <AlertDescription>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
  </AlertDescription>
  <AlertButton className='mt-3'>
    <button > Learn More </button>  <button className='ml-2' style={{fontWeight: 800}}> View changes </button>
  </AlertButton>
  </Alert>) }
*/
}

const variantConfig = {
  default: { Icon: FiInfo, color: 'foreground' },
  primary: { Icon: FiInfo, color: 'purple' },
  success: { Icon: PiCheckCircleBold, color: 'green' },
  warning: { Icon: FiAlertTriangle, color: 'yellow' },
  danger: { Icon: FiAlertCircle, color: 'red' },
  gray: { Icon: FiInfo, color: 'gray' },
};

const alertVariants = cva(
  'relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground',
        primary:
          'bg-purple-25 border-purple-300 text-purple-700 [&>svg]:text-purple-700',
        success:
          'bg-green-25 border-green-300 text-green-700 [&>svg]:text-green-700',
        warning:
          'bg-yellow-25 border-yellow-300 text-red-700 [&>svg]:text-yellow-700',
        danger: 'bg-red-25 border-red-300 text-red-700 [&>svg]:text-red-700',
        gray: 'bg-gray-25 border-gray-300 text-gray-700 [&>svg]:text-gray-700',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  onClose?: () => void;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, onClose, ...props }, ref) => {
    const { Icon, color } =
      variantConfig[variant as keyof typeof variantConfig];

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant }), className)}
        {...props}
      >
        <button
          onClick={onClose}
          className={`absolute right-2 top-0 p-1 text-2xl`}
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>

        <Icon className={`text-${color}-600 h-5 w-5`} />

        {props.children}
      </div>
    );
  }
);
Alert.displayName = 'Alert';

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn(
      'mb-1 px-2 font-medium leading-none tracking-tight',
      className
    )}
    {...props}
  />
));
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('px-2 text-sm [&_p]:leading-relaxed', className)}
    {...props}
  />
));
AlertDescription.displayName = 'AlertDescription';

const AlertButton = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn('mb-1 px-2 leading-none tracking-tight', className)}
    {...props}
  />
));
AlertButton.displayName = 'AlertButton';

export { Alert, AlertTitle, AlertDescription, AlertButton };
