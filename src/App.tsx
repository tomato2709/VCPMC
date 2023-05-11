import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ConfigProvider } from 'antd';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import KhoBanGhi from './pages/KhoBanGhi';
import DangNhap from './pages/Login/DangNhap';
import QuenMatKhau from './pages/ForgotPassword/QuenMatKhau';
import Dashboard from './pages/Dashboard/Dashboard';
import Layout from './components/layout/layout';
import Download from './pages/Support/Download';

function App() {
  return (
    <ConfigProvider theme={{token: {fontFamily: 'Montserrat Thin',},}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DangNhap />} />
          <Route path="/forgot-password" element={<QuenMatKhau />} />
          <Route path="/homepage" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="download" element={<Download />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
