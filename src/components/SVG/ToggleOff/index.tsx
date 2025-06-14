import colors from '../../../tailwind/colors';
import { SVGProps } from '../types';

const ToggleOffIcon = ({
  width,
  height,
  onClick,
  tabIndex,
  onKeyDown,
  className,
  ariaLabel,
  dataTestId
}: SVGProps) => {
  return (
    <svg
      data-testid={dataTestId}
      aria-label={ariaLabel}
      onKeyDown={onKeyDown}
      className={className}
      fill={colors.black}
      onClick={onClick}
      tabIndex={tabIndex}
      width={width}
      height={height}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='m0 11.617c0-3.763 3.05-6.814 6.813-6.817h10.371c3.765 0 6.817 3.052 6.817 6.817s-3.052 6.817-6.817 6.817h-10.366c-3.763 0-6.814-3.05-6.817-6.813zm6.817 4.543c2.507-.002 4.539-2.035 4.539-4.542 0-2.509-2.034-4.542-4.542-4.542s-4.542 2.034-4.542 4.542c0 1.254.508 2.389 1.329 3.21.822.823 1.958 1.332 3.214 1.332h.003z' />
    </svg>
  );
};

export default ToggleOffIcon;
