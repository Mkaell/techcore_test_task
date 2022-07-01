import React from "react";
import { Route, Routes } from "react-router-dom";

import Location from "../pages/Location/Location";
import DashBoard from "../pages/DashBoard/DashBoard";
import UsersPage from "../pages/UsersPage/UsersPage";
import SettingsPage from "../pages/SettingsPage/SettingsPage";

const Navigation = () => {
    return (
        <Routes>
            <Route path="/" element={<Location />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/settings" element={<SettingsPage />} />
        </Routes>
    );
};

export default Navigation;
