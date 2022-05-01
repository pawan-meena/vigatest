import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Login from './Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
  <Route exact path='/' element={<App/>}/> 
  <Route path ='/login' element={<Login/>}/>
  </Routes> 
  </BrowserRouter>
);
