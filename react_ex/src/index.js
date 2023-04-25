import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MarkList from './7Ex/markList';
import TodoList from './7Ex/TodoList/todoList';
import Todo2 from './7Ex/TodoList/todo2';
import { Weather } from './7Ex/weather';
import ImgSlider from './8Ex/imgSlider';
import SearchBox from './8Ex/searchBox';
import Counter from './10Ex/counter'
import BookShelf from './10Ex/bookShelf'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <MarkList /> */}
    {/* <TodoList/> */}
    {/* <Weather/> */}
    {/* <ImgSlider /> */}
    {/* <SearchBox/> */}
    {/* <Todo2/> */}
    {/*<Counter/>*/}
    <Counter/>
    {/*<BookShelf/>*/}
  </React.StrictMode>
);
