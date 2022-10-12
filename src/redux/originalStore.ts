import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { combineReducers } from 'redux';
import todosReducer from './todoReducer';
import themeReducer from './themeReducer';

const rootReducer = combineReducers({
  todos: todosReducer,
  theme: themeReducer,
});

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(rootReducer, composedEnhancer);
export default store;
