import { configureStore } from "@reduxjs/toolkit";

import todosSlice from "./todosSlice";
import themeSlice from "./themeSlice";

export const store = configureStore({
  reducer: {
    todos: todosSlice,
    theme: themeSlice,
  },
});

// combine the todos and filters reducers into a root reducer
// created a Redux store using that root reducer
// automatically added the thunk middleware
// automatically added more middleware to check for common mistakes like mutating state
// automatically set upRedux DevTools

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
