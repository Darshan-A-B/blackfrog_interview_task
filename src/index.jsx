import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import LoginPage from './LoginPage';
import DashboardPage from './DashboardPage';
import SuccessPage from './SuccessPage';

export function App() {
  return (
    <BrowserRouter>
     
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage/>} />
        <Route path="/successpost" element={<SuccessPage />} />
        <Route path="*" element={<Navigate to="/login" replace={true} />} />
      </Routes>

    </BrowserRouter>
  );
}
