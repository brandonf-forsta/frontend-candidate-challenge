import { clsm } from '../../tailwind/helpers';

interface TextInputProps {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  autoFocus?: boolean;
  onBlur?: () => void;
  className?: string;
  dataTestId?: string;
}

const TextInput = ({
  placeholder,
  value,
  onChange,
  onKeyDown,
  autoFocus,
  onBlur,
  className,
  dataTestId
}: TextInputProps) => {
  return (
    <input
      data-testid={dataTestId}
      autoFocus={autoFocus}
      className={clsm([
        'p-[5px]',
        'border',
        'border-softGray',
        'w-[165px]',
        className
      ])}
      type='text'
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
    />
  );
};

export default TextInput;
