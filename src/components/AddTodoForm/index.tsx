import { useState } from 'react';
import TextInput from '../TextInput';
import Button from '../Button';

interface AddTodoFormProps {
  addTodo: (text: string) => void;
}

const AddTodoForm = ({ addTodo }: AddTodoFormProps) => {
  const [inputValue, setInputValue] = useState<string>('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <TextInput
        dataTestId='add-todo-input'
        placeholder='Add new todo'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button dataTestId='add-todo-button'>Add</Button>
    </form>
  );
};

export default AddTodoForm;
