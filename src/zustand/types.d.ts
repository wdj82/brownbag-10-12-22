interface ThemeStore {
  theme: Theme;
  toggleTheme: () => void;
}

interface TodoStore {
  todos: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}
