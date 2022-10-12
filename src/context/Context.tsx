import TodoList from '../TodoList';
import { useTheme } from './useContextTheme';
import { useTodo } from './useContextTodo';

function Context() {
  const { todos, toggleTodo, deleteTodo, addTodo } = useTodo();
  const { theme, toggleTheme } = useTheme();

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

export default Context;
