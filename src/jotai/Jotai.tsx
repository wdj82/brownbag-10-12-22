import { nanoid } from '@reduxjs/toolkit';
import { useAtom } from 'jotai';
import TodoList from '../TodoList';
import { themeAtom } from './themeAtom';
import { todosAtom } from './todoAtom';

function Jotai() {
  const [theme, setTheme] = useAtom(themeAtom);
  const [todos, setTodos] = useAtom(todosAtom);

  const toggleTheme = () => {
    setTheme(theme === 'Light' ? 'Dark' : 'Light');
  };

  const addTodo = (text: string) => {
    setTodos((todos) => [...todos, { id: nanoid(), completed: false, text }]);
  };

  const deleteTodo = (id: string) => {
    const filteredTodo = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodo);
  };

  const toggleTodo = (id: string) => {
    const toggledTodos = todos.map((todo) => {
      if (todo.id === id) todo.completed = !todo.completed;
      return todo;
    });
    setTodos(toggledTodos);
  };

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

export default Jotai;
