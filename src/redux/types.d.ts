import type { TODO_ADDED, TODO_DELETED, TODO_TOGGLED } from './todoReducer';
import type { AnyAction } from 'redux';
import type { CHANGE_THEME } from './themeReducer';

interface AddTodo extends AnyAction {
  type: typeof TODO_ADDED;
  payload: string;
}

interface DeleteTodo extends AnyAction {
  type: typeof TODO_DELETED;
  payload: string;
}

interface ToggleTodo extends AnyAction {
  type: typeof TODO_TOGGLED;
  payload: string;
}

interface ToggleTheme extends AnyAction {
  type: typeof CHANGE_THEME;
}

export type Actions = AddTodo | DeleteTodo | ToggleTodo | ToggleTheme;
