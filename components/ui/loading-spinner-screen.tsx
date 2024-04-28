import ICONS from '@constants/icons';
import { SIZE } from '@constants/sizes';
import { STATUS } from '@constants/status';

import { cn } from '@utils/cn';

import { Icon } from '@components/ui/icon';

export default function LoadingSpinnerScreen() {
  return (
    <section
      className={cn(
        'loading-page fixed left-0 top-0 z-[10000] flex h-full w-full flex-col items-center justify-center bg-white'
      )}
    >
      <Icon
        icon={ICONS.SPINNER_2}
        size={SIZE['4XL']}
        className={cn('animate-spin')}
        status={STATUS.PRIMARY}
      />
    </section>
  );
}
