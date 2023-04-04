import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { routes } from './utils';

const root = document.getElementById('root') as HTMLElement;

createRoot(root).render(<RouterProvider router={routes} />);
