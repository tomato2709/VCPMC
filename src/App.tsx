import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ConfigProvider } from 'antd';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import KhoBanGhi from './pages/KhoBanGhi';
import DangNhap from './pages/Login/DangNhap';
import QuenMatKhau from './pages/ForgotPassword/QuenMatKhau';

function App() {
  return (
    <ConfigProvider theme={{token: {fontFamily: 'Montserrat Thin',},}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DangNhap />} />
          <Route path="/forgot-password" element={<QuenMatKhau />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
