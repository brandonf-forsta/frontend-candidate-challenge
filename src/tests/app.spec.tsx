import App from '../components/App';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { INITIAL_TODOS } from '../constants';

describe('TodoApp', () => {
  it('renders app', () => {
    const app = render(<App initialTodos={INITIAL_TODOS} />);
    expect(app).not.toBeUndefined();
  });

  describe('Todo App with initial data', () => {
    beforeEach(() => {
      render(<App initialTodos={INITIAL_TODOS} />);
    });

    it('renders initial items', () => {
      expect(screen.getByText('Buy milk')).toBeDefined();
      screen.getByTestId('todo-0');

      // TODO: Verify second todo
      expect(screen.getByText('Buy bread')).toBeDefined();
      screen.getByTestId('todo-1');
    });

    // TODO: Test app functionality: Create, edit, delete, mark as done.
    test('adds a new todo item', () => {
      const input = screen.getByTestId('add-todo-input');
      fireEvent.change(input, { target: { value: 'Go to the park' } });

      fireEvent.click(screen.getByTestId('add-todo-button'));

      expect(screen.getByText('Go to the park')).toBeInTheDocument();
    });

    test('marks a todo as done and reopens it', () => {
      const todo = screen.getByText('Buy bread');

      const toggleOnButton = screen.getByTestId(`toggle-on-1`);
      fireEvent.click(toggleOnButton);
      expect(todo).toHaveClass('line-through');

      const toggleOffButton = screen.getByTestId(`toggle-off-1`);
      fireEvent.click(toggleOffButton);
      expect(todo).not.toHaveClass('line-through');
    });

    test('edits a todo item by pressing enter on the edit input', () => {
      const todo = screen.getByText('Buy milk');
      fireEvent.click(todo);

      const editInput = screen.getByDisplayValue('Buy milk');
      fireEvent.change(editInput, { target: { value: 'Buy eggs' } });
      fireEvent.keyDown(editInput, { key: 'Enter', code: 'Enter' });

      expect(screen.getByText('Buy eggs')).toBeInTheDocument();
    });

    test('edits a todo item by clicking away from the edit input', async () => {
      const todo = screen.getByText('Buy bread');
      fireEvent.click(todo);

      const editInput = screen.getByDisplayValue('Buy bread');
      fireEvent.change(editInput, { target: { value: 'Buy ramen' } });
      fireEvent.blur(editInput);
      expect(screen.getByText('Buy ramen')).toBeInTheDocument();
    });

    test('deletes a todo item', () => {
      expect(screen.getByText('Buy bread')).toBeInTheDocument();

      const deleteBtn = screen.getByTestId('delete-icon-1');
      fireEvent.click(deleteBtn);

      expect(screen.queryByText('Buy bread')).not.toBeInTheDocument();
    });
  });
});
