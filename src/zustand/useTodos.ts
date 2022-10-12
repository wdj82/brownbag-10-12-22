import { nanoid } from '@reduxjs/toolkit';
import create from 'zustand';

export const useTodos = create<TodoStore>((set, get) => ({
  todos: [{ id: '0', completed: true, text: 'Learn Zustand' }],

  addTodo: (text) => {
    const newTodo = { id: nanoid(), completed: false, text };
    set((state) => ({ todos: [...state.todos, newTodo] }));
  },

  deleteTodo: (id) => {
    set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) }));
  },

  toggleTodo: (id) => {
    const todos = get().todos.map((todo) => {
      if (todo.id === id) todo.completed = !todo.completed;
      return todo;
    });
    set({ todos });
  },
}));
