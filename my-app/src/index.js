import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

import './index.css';
import App from './App';
import Domain from './components/Domain';
import NotFound from './pages/NotFound';
import Emp from './pages/Emp';
import Dept from './pages/Dept';
import InsertDept from './pages/InsertDept';
import UpdateDept from './pages/UpdateDept';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<Domain />} />
        <Route path='dept'>
          <Route index element={<Dept />} />
          <Route path='insert' element={<InsertDept />} />
          <Route path='update' element={<UpdateDept />} />
        </Route>
        <Route path='emp'>
          <Route index element={<Emp />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
