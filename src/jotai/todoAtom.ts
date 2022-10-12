import { atom } from 'jotai';

export const todosAtom = atom<Todo[]>([
  { id: '0', completed: true, text: 'Learn Jotai' },
]);
