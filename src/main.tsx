import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import JotaiRoute from './routes/JotaiRoute';
import ReduxRoute from './routes/ReduxRoute';
import RTKRoute from './routes/RTKRoute';
import ContextRoute from './routes/ContextRoute';
import Zustand from './zustand/Zustand';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/zustand',
    element: <Zustand />,
  },
  {
    path: '/jotai',
    element: <JotaiRoute />,
  },
  {
    path: '/redux',
    element: <ReduxRoute />,
  },
  {
    path: '/rtk',
    element: <RTKRoute />,
  },
  {
    path: '/context',
    element: <ContextRoute />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
