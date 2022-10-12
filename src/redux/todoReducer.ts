import { nanoid } from '@reduxjs/toolkit';
import type { AnyAction } from 'redux';

export const TODO_ADDED = 'todos/todoAdded';
export const TODO_TOGGLED = 'todos/todoToggled';
export const TODO_DELETED = 'todos/todoDeleted';

const initialState: Todo[] = [
  { id: '0', completed: false, text: 'Learn Redux' },
];

export default function todosReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case TODO_ADDED: {
      return [
        ...state,
        {
          id: nanoid(),
          text: action.payload,
          completed: false,
        },
      ];
    }

    case TODO_TOGGLED: {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    }

    case TODO_DELETED: {
      return state.filter((todo) => todo.id !== action.payload);
    }

    default:
      return state;
  }
}
