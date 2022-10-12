import TodoList from '../TodoList';
import { useTheme } from './useTheme';
import { useTodos } from './useTodos';

function Zustand() {
  const { addTodo, deleteTodo, toggleTodo, todos } = useTodos((state) => state);
  const { theme, toggleTheme } = useTheme((state) => state);

  return (
    <TodoList
      addTodo={addTodo}
      deleteTodo={deleteTodo}
      toggleTheme={toggleTheme}
      toggleTodo={toggleTodo}
      theme={theme}
      todos={todos}
    />
  );
}

export default Zustand;
