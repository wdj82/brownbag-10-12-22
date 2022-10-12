interface TodoContext {
  todos: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}

interface ThemeContext {
  theme: Theme;
  toggleTheme: () => void;
}
