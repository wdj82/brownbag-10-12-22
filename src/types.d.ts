interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

type Theme = 'Light' | 'Dark';

interface State {
  theme: Theme;
  todos: Todo[];
}
