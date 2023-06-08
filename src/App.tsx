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
import UpdateRecord from './pages/Record/UpdateRecord';
import RevenueReport from './pages/Revenue/Report/Report';
import RevenueDistribution from './pages/Revenue/Distribution/Distribution';
import RevenueHistory from './pages/Revenue/History/History';
import Playlist from './pages/Playlist/Playlist';
import AddPlaylist from './pages/Playlist/AddPlaylist/AddPlaylist';
import AddRecordIntoPlaylist from './pages/Playlist/AddPlaylist/AddRecordIntoPlaylist';
import ManageDevice from './pages/Manage/Device/Device';
import AddDevice from './pages/Manage/Device/AddDevice';
import DeviceDetail from './pages/Manage/Device/DeviceDetail';
import ManageAuthorizedPartner from './pages/Manage/AuthorizedPartner/AuthorizedPartner';
import EditAuthorizedPartner from './pages/Manage/AuthorizedPartner/EditAuthorizedPartner';
import Schedule from './pages/Schedule/Schedule';
import ScheduleDetail from './pages/Schedule/ScheduleDetail';
import ManageUnit from './pages/Manage/Unit/Unit';
import ManageContract from './pages/Manage/Contract/Contract';
import EditContractWarning from './pages/Settings/Contract/EditContractWarning';
import HistoryDetail from './pages/Revenue/History/HistoryDetail';
import DistributionDetail from './pages/Revenue/Distribution/DistributionDetail';
import ReportDetail from './pages/Revenue/Report/ReportDetail';
import RevenueReportDetail from './pages/Revenue/Report/RevenueReportDetail';
import SyncHistory from './pages/Revenue/Report/SyncHistory';
import EditUser from './pages/Settings/UserAuthorization/EditUser';
import AddUser from './pages/Settings/UserAuthorization/AddUser';
import AddRole from './pages/Settings/UserAuthorization/AddRole';
import EditRole from './pages/Settings/UserAuthorization/EditRole';
import UnitDetail from './pages/Manage/Unit/UnitDetail';
import UnitUserDetail from './pages/Manage/Unit/UserDetail/UnitUserDetail';
import EditUnitUserDetail from './pages/Manage/Unit/UserDetail/EditUnitUserDetail';
import AddUnitUser from './pages/Manage/Unit/UserDetail/AddUnitUser';

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
            <Route path="record/update-information/:id" element={<UpdateRecord />} />

            <Route path="playlist" element={<Playlist />} />
            <Route path="playlist/add-playlist" element={<AddPlaylist />} />
            <Route path="playlist/add-playlist/add-record-to-playlist" element={<AddRecordIntoPlaylist />} />

            <Route path="schedule" element={<Schedule />} />
            <Route path="schedule/detail/id" element={<ScheduleDetail />} />

            <Route path="manage-device" element={<ManageDevice />} />
            <Route path="manage-device/add-device" element={<AddDevice />} />
            <Route path="manage-device/device-detail" element={<DeviceDetail />} />
            <Route path="manage-authorized-partner" element={<ManageAuthorizedPartner />} />
            <Route path="manage-authorized-partner/detail/:id" element={<EditAuthorizedPartner />} />
            <Route path="manage-unit" element={<ManageUnit />} />
            <Route path="manage-unit/detail/id" element={<UnitDetail />} />
            <Route path="manage-unit/detail/id/user-detail/id" element={<UnitUserDetail />} />
            <Route path="manage-unit/detail/id/user-detail/id/edit-unit-user" element={<EditUnitUserDetail />} />
            <Route path="manage-unit/detail/id/add-unit-user" element={<AddUnitUser />} />
            <Route path="manage-contract" element={<ManageContract />} />

            <Route path="revenue-report" element={<RevenueReport />} />
            <Route path="revenue-report/report-detail" element={<ReportDetail />} />
            <Route path="revenue-report/report-detail/detail/id" element={<RevenueReportDetail />} />
            <Route path="revenue-report/report-detail/sync-history/id" element={<SyncHistory />} />
            <Route path="revenue-history" element={<RevenueHistory />} />
            <Route path="revenue-history/detail/id" element={<HistoryDetail />} />
            <Route path="revenue-distribution" element={<RevenueDistribution />} />
            <Route path="revenue-distribution/detail/id" element={<DistributionDetail />} />

            <Route path="user-authorization" element={<UserAuthorization />} />
            <Route path="user-authorization/add-user" element={<AddUser />} />
            <Route path="user-authorization/edit-user/:id" element={<EditUser />} />
            <Route path="user-authorization/add-role" element={<AddRole />} />
            <Route path="user-authorization/edit-role/id" element={<EditRole />} />
            <Route path="configuration" element={<Configuration />} />
            <Route path="cycle" element={<Cycle />} />
            <Route path="manager-contract" element={<ManagerContract />} />
            <Route path="manager-contract/edit-contract-warning" element={<EditContractWarning />} />
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
