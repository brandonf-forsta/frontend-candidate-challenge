import { clsm } from '../../tailwind/helpers';

interface ButtonProps {
  children: React.ReactNode;
  dataTestId?: string;
}

const Button = ({ children, dataTestId }: ButtonProps) => {
  return (
    <button
      data-testid={dataTestId}
      className={clsm([
        'p-[5px]',
        'm-[5px]',
        'bg-brightBlue',
        'text-white',
        'border-none',
        'hover:cursor-pointer'
      ])}
    >
      {children}
    </button>
  );
};

export default Button;
