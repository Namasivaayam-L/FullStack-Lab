import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MarkList from './7Ex/markList';
import TodoList from './7Ex/TodoList/todoList';
import { Weather } from './7Ex/weather';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <MarkList /> */}
    {/* <TodoList/> */}
    <Weather/>
  </React.StrictMode>
);
