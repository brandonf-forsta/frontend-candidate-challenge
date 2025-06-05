import { useState } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import { generateUniqueId } from '../helpers';
import { clsm } from '../tailwind/helpers';

export interface Todo {
  id: string;
  done: boolean;
  text: string;
}

interface AppProps {
  initialTodos: Todo[]; // for testing purposes
}

const App = ({ initialTodos }: AppProps) => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [editingId, setEditingId] = useState<string | null>(null);

  const addTodo = (text: string) => {
    if (!text) return;

    const id = generateUniqueId();

    setTodos((prevTodos) => [
      { id, done: false, text: text.trim() },
      ...prevTodos
    ]);
  };

  const deleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id: string, text: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            text
          };
        }
        return todo;
      })
    );
  };

  const toggleTodoDoneState = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            done: !todo.done
          };
        }
        return todo;
      })
    );
  };

  return (
    <div className={clsm(['flex', 'flex-col', 'gap-4'])}>
      <AddTodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        setEditingId={setEditingId}
        editingId={editingId}
        updateTodo={updateTodo}
        toggleTodoDoneState={toggleTodoDoneState}
      />
    </div>
  );
};

export default App;
