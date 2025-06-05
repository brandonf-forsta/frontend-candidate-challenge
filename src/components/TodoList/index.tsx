import { clsm } from '../../tailwind/helpers';
import { Todo } from '../App';
import TodoItem from '../TodoItem';

interface TodoListProps {
  todos: Todo[];
  deleteTodo: (id: string) => void;
  editingId: string | null;
  setEditingId: (id: string) => void;
  updateTodo: (id: string, text: string) => void;
  toggleTodoDoneState: (id: string) => void;
}

const TodoList = ({
  todos,
  deleteTodo,
  editingId,
  setEditingId,
  updateTodo,
  toggleTodoDoneState
}: TodoListProps) => {
  return (
    <ul className={clsm(['list-none', 'pl-0', 'w-full', 'md:w-[400px]'])}>
      {todos.map((todo: Todo, i: number) => (
        <TodoItem
          key={`todo-${i}`}
          i={i}
          id={todo.id}
          text={todo.text}
          deleteTodo={deleteTodo}
          isEditing={editingId === todo.id}
          setEditingId={setEditingId}
          updateTodo={updateTodo}
          toggleTodoDoneState={toggleTodoDoneState}
          isDone={todo.done}
        />
      ))}
    </ul>
  );
};

export default TodoList;
