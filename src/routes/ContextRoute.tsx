import Context from '../context/Context';
import { ThemeProvider } from '../context/useContextTheme';
import { TodoProvider } from '../context/useContextTodo';

function ContextRoute() {
  return (
    <ThemeProvider>
      <TodoProvider>
        <Context />
      </TodoProvider>
    </ThemeProvider>
  );
}

export default ContextRoute;
