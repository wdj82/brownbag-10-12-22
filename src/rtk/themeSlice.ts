import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: 'Light' as Theme,
  reducers: {
    changeTheme: (state) => {
      return state === 'Light' ? 'Dark' : 'Light';
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
