import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ConfigProvider } from 'antd';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DangNhap from './pages/Login/DangNhap';
import QuenMatKhau from './pages/ForgotPassword/QuenMatKhau';
import Dashboard from './pages/Dashboard/Dashboard';
import Layout from './components/layout/layout';
import Download from './pages/Support/Download';
import SuccessFpw from './pages/ForgotPassword/Success';
import ErrorFpw from './pages/ForgotPassword/Error';
import NewPassword from './pages/ForgotPassword/NewPassword';
import Record from './pages/Record/Record';
import Feedback from './pages/Support/Feedback';
import Manual from './pages/Support/Manual';
import Configuration from './pages/Settings/Configuration/Configuration';
import Cycle from './pages/Settings/Cycle/Cycle';
import ManagerContract from './pages/Settings/Contract/Contract';
import ProductInfo from './pages/Settings/ProductInfo/ProductInfo';
import UserAuthorization from './pages/Settings/UserAuthorization/UserAuthorization';

function App() {
  return (
    <ConfigProvider theme={{token: {fontFamily: 'Montserrat Thin',},}}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<DangNhap />} />
          <Route path="/forgot-password">
            <Route index element={<QuenMatKhau />} />
            <Route path="success" element={<SuccessFpw />} />
            <Route path="error" element={<ErrorFpw />} />
            <Route path="new-password" element={<NewPassword />} />
          </Route>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="record" element={<Record />} />
            <Route path="user-authorization" element={<UserAuthorization />} />
            <Route path="configuration" element={<Configuration />} />
            <Route path="cycle" element={<Cycle />} />
            <Route path="manager-contract" element={<ManagerContract />} />
            <Route path="product-information" element={<ProductInfo />} />
            <Route path="download" element={<Download />} />
            <Route path="feedback" element={<Feedback />} />
            <Route path="manual" element={<Manual />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
