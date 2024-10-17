// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./index.css";

import MyCars from "./pages/MyAccount/MyCar";
import MyAccount from "./pages/MyAccount/MyAccount";
import FavoriteCars from "./pages/MyAccount/FavouriteCar";
import MyTrips from "./pages/MyAccount/MyTrip";
import Gifts from "./pages/MyAccount/Gifts";
import ChangePassword from "./pages/MyAccount/Changepassword";
import Logout from "./pages/MyAccount/Logout";

function Routess() {
  return (
    <Router>
      <div className="container">
        <div className="sidebar">
          <h2>Menu</h2>
          <ul>
            <li>
              <Link to="/my-account">
                <i className="icon">&#128100;</i> <span>Tài khoản của tôi</span>
              </Link>
            </li>
            <li>
              <Link to="/favorite-cars">
                <i className="icon">&#10084;</i> <span>Xe yêu thích</span>
              </Link>
            </li>
            <li>
              <Link to="/my-cars">
                <i className="icon">&#128663;</i> <span>Xe của tôi</span>
              </Link>
            </li>
            <li>
              <Link to="/my-trips">
                <i className="icon">&#128197;</i> <span>Chuyến của tôi</span>
              </Link>
            </li>
            <li>
              <Link to="/gifts">
                <i className="icon">&#127873;</i> <span>Quà tặng</span>
              </Link>
            </li>
            <li>
              <Link to="/change-password">
                <i className="icon">&#128274;</i> <span>Đổi mật khẩu</span>
              </Link>
            </li>
            <li>
              <Link to="/logout">
                <i className="icon">&#128686;</i> <span>Đăng xuất</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="content">
          <Routes>
            <Route path="/my-account" element={<MyAccount />} />
            <Route path="/favorite-cars" element={<FavoriteCars />} />
            <Route path="/my-cars" element={<MyCars />} />
            <Route path="/my-trips" element={<MyTrips />} />
            <Route path="/gifts" element={<Gifts />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default Routess;