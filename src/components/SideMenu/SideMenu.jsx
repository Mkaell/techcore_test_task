import logo from "../../assets/logo.svg";
import avatar from "../../assets/Avatar.svg";
import home from "../../assets/home.svg";
import users from "../../assets/users.svg";
import settings from "../../assets/settings.svg";
import pl from "../../assets/pl.svg";
import vacation_manager from "../../assets/icon-vacation-manager.svg";
import notfications from "../../assets/notfications-empty.svg";
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
function getItem(label, path, icon, children) {
    return {
        path,
        icon,
        children,
        label,
    };
}

const items = [
    getItem("Dashboard", "dashboard", home),
    getItem("Users", "users", users),
    getItem("Settings", "settings", settings),
    getItem("P&L", "pl", pl),
    getItem("Vacation Manager", "vacation", vacation_manager),
];

const SideMenu = ({ open, setOpen, sideMenu, setSideMenu }) => {
    const navigate = useNavigate();
    const handleLink = (label, path) => {
        setOpen(true);
        setSideMenu({
            label: label,
            path: path,
        });
    };
    useEffect(() => {
        if (sideMenu.path === "settings") {
            navigate("/");
        } else {
            navigate(sideMenu.path);
        }
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
                            style={
                                sideMenu.label === item.label
                                    ? { color: "#00a0ec" }
                                    : { color: "#afb6c6" }
                            }
                            key={i}
                            onClick={() => handleLink(item.label, item.path)}
                        >
                            <img src={item.icon} alt={item.label} />
                            {item.label}
                        </li>
                    ))}
                </ul>
                <div className="sideMenu-img_wrapper">
                    <img
                        src={notfications}
                        alt="notfications"
                        className="sideMenu-img-notfication"
                    />
                    <img
                        src={avatar}
                        alt="avatar"
                        className="sideMenu-img-avatar"
                    />
                </div>
            </div>
            <SubMenu open={open} setOpen={setOpen} sideMenu={sideMenu} />
        </>
    );
};

export default SideMenu;
