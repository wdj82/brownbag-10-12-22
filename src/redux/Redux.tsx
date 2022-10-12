import { useSelector, useDispatch } from 'react-redux';
import TodoList from '../TodoList';
import type { Dispatch } from 'redux';
import type { Actions } from './types';

function Redux() {
  const { todos, theme } = useSelector((state: State) => state);
  const dispatch: Dispatch<Actions> = useDispatch();

  const addTodo = (text: string) => {
    dispatch({
      type: 'todos/todoAdded',
      payload: text,
    });
  };

  const deleteTodo = (id: string) => {
    dispatch({
      type: 'todos/todoDeleted',
      payload: id,
    });
  };

  const toggleTodo = (id: string) => {
    dispatch({
      type: 'todos/todoToggled',
      payload: id,
    });
  };

  const toggleTheme = () => {
    dispatch({
      type: 'theme/changeTheme',
    });
  };

  return (
    <TodoList
      addTodo={addTodo}
      deleteTodo={deleteTodo}
      toggleTheme={toggleTheme}
      toggleTodo={toggleTodo}
      theme={theme}
      todos={todos}
    />
  );
}

export default Redux;
