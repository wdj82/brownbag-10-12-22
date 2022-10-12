import { createSlice, nanoid } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: Todo[] = [
  { id: '0', text: 'Learn Redux Toolkit', completed: false },
];

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todoAdded(state, action: PayloadAction<string>) {
      state.push({ id: nanoid(), completed: false, text: action.payload });
    },

    todoToggled(state, action: PayloadAction<string>) {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },

    todoDeleted(state, action: PayloadAction<string>) {
      state = state.filter((todo) => todo.id !== action.payload);
      return state;
    },
  },
});

export const { todoAdded, todoToggled, todoDeleted } = todosSlice.actions;

export default todosSlice.reducer;
