import React from 'react';
import { createRoot } from 'react-dom/client';
import { Root } from './components';

const root = document.getElementById('root') as HTMLElement;

createRoot(root).render(<Root />);
