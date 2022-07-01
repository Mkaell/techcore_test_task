import logo from "../../assets/logo.svg";
import avatar from "../../assets/Avatar.svg";
import home from "../../assets/home.svg";
import users from "../../assets/users.svg";
import settings from "../../assets/settings.svg";
import pl from "../../assets/pl.svg";
import vacation_manager from "../../assets/icon-vacation-manager.svg";
import {
    FileOutlined,
    PieChartOutlined,
    DesktopOutlined,
    UserOutlined,
    TeamOutlined,
    SearchOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import { useEffect, useState } from "react";
import { Radio, Space, Tabs, Button } from "antd";
import SubMenu from "../SubMenu/SubMenu";
import "./SideMenu.css";
import Navigation from "../../routes/Navigation";
import { useNavigate } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
const { TabPane } = Tabs;
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
    getItem("Dashboard", "Dashboard", home),
    getItem("Users", "Users", users),
    getItem("Settings", "Settings", settings),
    getItem("P&L", "P&L", pl),
    getItem("Vacation Manager", "Vacation Manager", vacation_manager),
];

const SideMenu = ({ open, setOpen, sideMenu, setSideMenu }) => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate(sideMenu.toLowerCase());
    }, [sideMenu]);

    return (
        <>
            <div className="sideMenu">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <ul className="sideMenu-list">
                    {items.map((item, i) => (
                        <li
                            key={i}
                            style={{ cursor: "pointer" }}
                            onClick={() => setSideMenu(item.label)}
                        >
                            <img src={item.icon} alt={item.label} />
                            {item.label}
                        </li>
                    ))}
                    {/* <li
                        style={{ cursor: "pointer" }}
                        onClick={(e) => setSideMenu(e.key)}
                    >
                        Dashboard
                    </li>
                    <li onClick={(e) => setSideMenu(e.key)}>Users</li>
                    <li onClick={(e) => setSideMenu(e.key)}>Settings</li>
                    <li>P&L</li>
                    <li>Vacation Manager</li> */}
                </ul>
                <div className="logo">
                    <img src={avatar} alt="avatar" />
                </div>
            </div>
            {/* <Sider trigger={null}>
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>

                <Menu
                    style={{
                        background: " #f5f9fe",
                    }}
                    defaultSelectedKeys={["Settings"]}
                    mode="inline"
                    items={items}
                    onClick={(e) => setSideMenu(e.key)}
                />
                <div className="logo">
                    <img src={avatar} alt="avatar" />
                </div>
            </Sider> */}
            <SubMenu open={open} setOpen={setOpen} sideMenu={sideMenu} />
        </>
    );
};

export default SideMenu;
