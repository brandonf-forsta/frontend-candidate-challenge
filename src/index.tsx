import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './tailwind/tailwind.css';
import { INITIAL_TODOS } from './constants';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App initialTodos={INITIAL_TODOS} />
  </React.StrictMode>
);
