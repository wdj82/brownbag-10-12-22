import TodoList from '../TodoList';
import { useAppDispatch, useAppSelector } from './hooks';
import { changeTheme } from './themeSlice';
import { todoAdded, todoDeleted, todoToggled } from './todosSlice';

function RTK() {
  const { todos, theme } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const addTodo = (text: string) => {
    dispatch(todoAdded(text));
  };

  const deleteTodo = (id: string) => {
    dispatch(todoDeleted(id));
  };

  const toggleTodo = (id: string) => {
    dispatch(todoToggled(id));
  };

  const toggleTheme = () => {
    dispatch(changeTheme());
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

export default RTK;
