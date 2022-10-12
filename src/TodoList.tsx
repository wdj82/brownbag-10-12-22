import { useState } from 'react';

interface TodoListProps {
  addTodo: (text: string) => void;
  todos: Todo[];
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
  toggleTheme: () => void;
  theme: Theme;
}

function TodoList({
  todos,
  addTodo,
  deleteTodo,
  toggleTodo,
  theme,
  toggleTheme,
}: TodoListProps) {
  const [text, setText] = useState('');

  return (
    <div className={`h-screen ${theme === 'Dark' ? 'dark' : ''}`}>
      <div className='flex h-screen flex-col gap-4 p-4 dark:bg-black'>
        <h1 className='text-3xl font-bold dark:text-white'>
          Client State Management Libraries
        </h1>
        <div>
          <button
            onClick={toggleTheme}
            className='rounded bg-blue-400 p-2 text-white'
          >
            {theme}
          </button>
        </div>
        <div>
          <div className='flex gap-2 pb-8'>
            <input
              type='text'
              className='rounded border border-black p-2'
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button
              className='rounded bg-blue-400 p-2 text-white'
              onClick={() => addTodo(text)}
            >
              Add Todo
            </button>
          </div>
          <div className='flex flex-col gap-2'>
            {todos.map((todo) => {
              return (
                <ul
                  key={todo.id}
                  className='flex w-1/4 flex-1 gap-3 border p-3'
                >
                  <button
                    className='text-red-500'
                    onClick={() => deleteTodo(todo.id)}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='h-6 w-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M6 18L18 6M6 6l12 12'
                      />
                    </svg>
                  </button>
                  <div className='dark:text-white'>{todo.text}</div>
                  <input
                    type='checkbox'
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                  />
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
