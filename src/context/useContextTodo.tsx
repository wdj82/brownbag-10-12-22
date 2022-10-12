import { useState, createContext, useContext } from 'react';
import type { PropsWithChildren } from 'react';
import { nanoid } from '@reduxjs/toolkit';

const TodoContext = createContext<TodoContext | undefined>(undefined);

function useTodoState() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: nanoid(), completed: false, text: 'Learn Context' },
  ]);

  function addTodo(text: string) {
    setTodos([...todos, { id: nanoid(), completed: false, text }]);
  }

  function deleteTodo(id: string) {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  }

  function toggleTodo(id: string) {
    const toggledTodos = todos.map((todo) => {
      if (todo.id === id) todo.completed = !todo.completed;
      return todo;
    });
    setTodos(toggledTodos);
  }

  return { todos, addTodo, deleteTodo, toggleTodo };
}

// Provider helper
function TodoProvider({ children }: PropsWithChildren) {
  const todos = useTodoState();

  return <TodoContext.Provider value={todos}>{children}</TodoContext.Provider>;
}

// hook to check for context provider
function useTodo() {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error('useTodo must be used within a TodoContext provider');
  }
  return context;
}

export { TodoProvider, useTodo };
