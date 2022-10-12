import { Link } from 'react-router-dom';

function App() {
  return (
    <nav className='flex flex-col gap-6 p-8 underline'>
      <ul>
        <li>
          <Link to={'context/'}>Context</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to={'redux/'}>Redux</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to={'rtk/'}>Redux Toolkit</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to={'zustand/'}>Zustand</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to={'jotai/'}>Jotai</Link>
        </li>
      </ul>
    </nav>
  );
}

export default App;
