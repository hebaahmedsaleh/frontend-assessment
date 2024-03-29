import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Task1 } from './components/task1';
import { Task2 } from './components/task2';
import { Task3 } from './components/task3';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Task2 />} />
        <Route path='/home' element={<App />} />
        <Route path='/task-1' element={<Task1 />} />
        <Route path='/task-2' element={<Task2 />} />
        <Route path='/task-3' element={<Task3 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
