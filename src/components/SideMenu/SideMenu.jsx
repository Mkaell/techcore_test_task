import logo from "../../assets/logo.svg";
import avatar from "../../assets/Avatar.svg";
import notfications from "../../assets/notfications-empty.svg";
import { useEffect } from "react";
import SubMenu from "../SubMenu/SubMenu";
import { useNavigate } from "react-router-dom";
import {
    DashboardIcon,
    PlIcon,
    SettingBigIcon,
    UsersIcon,
    VacationIcon,
} from "../icons/Icons";

import "./SideMenu.css";
import { getItem } from "../../utils/testdata";

const items = [
    getItem("Dashboard", "dashboard", <DashboardIcon />),
    getItem("Users", "users", <UsersIcon />),
    getItem("Settings", "settings", <SettingBigIcon />),
    getItem("P&L", "pl", <PlIcon />),
    getItem("Vacation Manager", "vacation", <VacationIcon />),
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
                            {item.icon}
                            <span style={{ marginTop: "8px" }}>
                                {item.label}
                            </span>
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
