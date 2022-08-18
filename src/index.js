import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import BaiTapThucHanhLayout from './BaiTapLayoutComponent/BaiTapThucHanhLayout';
import BaiTapGioHangComponent from './BaiTapGioHang/BaiTapGioHangComponent';
import Home from './Pages/Home/Home';
import { Provider } from 'react-redux';
import ReactForm from './BaiTapReactForm/ReactForm';
import { store } from './redux/configStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<App />}>
            <Route index element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route
              path='BaiTapGioHangComponent'
              element={<BaiTapGioHangComponent />}
            ></Route>
            <Route path='baitapreactform' element={<ReactForm/>}></Route>
            <Route path='*' element={<Navigate to='' />}></Route>
          </Route>
          <Route
            path='BaiTapLayOutComponent'
            element={<BaiTapThucHanhLayout />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
