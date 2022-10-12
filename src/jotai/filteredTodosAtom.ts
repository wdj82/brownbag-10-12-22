import { atom } from 'jotai';
import { todosAtom } from './todoAtom';

export const filterAtom = atom<'all' | 'completed' | 'incomplete'>('all');

export const filteredTodosAtom = atom<Todo[]>((get) => {
  const filter = get(filterAtom);
  const todos = get(todosAtom);

  if (filter === 'all') {
    return todos;
  } else if (filter === 'completed') {
    return todos.filter((todo) => todo.completed);
  } else {
    return todos.filter((todo) => !todo.completed);
  }
});
