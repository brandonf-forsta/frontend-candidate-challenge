import { useState } from 'react';
import { clsm } from '../../tailwind/helpers';
import DeleteIcon from '../SVG/Delete';
import TextInput from '../TextInput';
import ToggleOffIcon from '../SVG/ToggleOff';
import ToggleOnIcon from '../SVG/ToggleOn';

interface TodoItemProps {
  id: string;
  deleteTodo: (text: string) => void;
  text: string;
  isEditing: boolean;
  setEditingId: (id: string) => void;
  updateTodo: (id: string, text: string) => void;
  toggleTodoDoneState: (id: string) => void;
  isDone: boolean;
  i: number;
}

const TodoItem = ({
  setEditingId,
  isEditing,
  text,
  id,
  deleteTodo,
  updateTodo,
  toggleTodoDoneState,
  isDone,
  i
}: TodoItemProps) => {
  const [editValue, setEditValue] = useState<string>('');

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      updateTodo(id, editValue);
      setEditingId('');
    }
  };

  const onBlurHandler = () => {
    updateTodo(id, editValue);
    setEditingId('');
  };

  const toggleIconProps = {
    className: 'cursor-pointer',
    width: 30,
    height: 30,
    tabIndex: 0,
    onClick: () => toggleTodoDoneState(id),
    onKeyDown: (e: React.KeyboardEvent<SVGSVGElement>) =>
      e.key === 'Enter' && toggleTodoDoneState(id)
  };

  return (
    <li
      className={clsm([
        'text-darkGray',
        'bg-semiTransparentWhite',
        'p-[10px]',
        'mb-[10px]',
        'rounded-sm',
        'list-none'
      ])}
    >
      <div
        className={clsm([
          'flex',
          'flex-row',
          'justify-between',
          'items-center'
        ])}
      >
        {isEditing ? (
          <TextInput
            className='w-full'
            autoFocus={true}
            onKeyDown={onKeyDownHandler}
            onBlur={onBlurHandler}
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />
        ) : (
          <span
            tabIndex={0}
            className={clsm(['cursor-pointer', isDone && 'line-through'])}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setEditingId(id);
                setEditValue(text);
              }
            }}
            onClick={() => {
              setEditingId(id);
              setEditValue(text);
            }}
            data-testid={`todo-${i}`}
          >
            {text}
          </span>
        )}

        {!isEditing && (
          <div className={clsm(['flex', 'flex-row', 'gap-2'])}>
            {!isDone ? (
              <ToggleOffIcon
                {...toggleIconProps}
                ariaLabel='Complete todo'
                dataTestId={`toggle-on-${i}`}
              />
            ) : (
              <ToggleOnIcon
                {...toggleIconProps}
                ariaLabel='Reopen todo'
                dataTestId={`toggle-off-${i}`}
              />
            )}
            <DeleteIcon
              dataTestId={`delete-icon-${i}`}
              ariaLabel='Delete todo'
              onKeyDown={(e) => e.key === 'Enter' && deleteTodo(id)}
              onClick={() => deleteTodo(id)}
              className='cursor-pointer'
              width={30}
              height={30}
              tabIndex={0}
            />
          </div>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
