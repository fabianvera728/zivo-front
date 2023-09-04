import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import React from 'react';
import routes from './routes.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={routes} />
    </NextUIProvider>
  </React.StrictMode>,
);
