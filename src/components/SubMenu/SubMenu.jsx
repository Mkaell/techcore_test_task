import {
    MailOutlined,
    SettingOutlined,
    AppstoreOutlined,
    SearchOutlined,
} from "@ant-design/icons";
import arrow from "../../assets/Arrow.svg";
import { Menu, Button } from "antd";
import { Link, NavLink } from "react-router-dom";
import "./SubMenu.css";

const SubMenu = ({ open, sideMenu, setOpen }) => {
    return (
        <div style={{ position: "relative" }}>
            <div
                className="side-menu"
                style={{
                    width: open ? "240px" : "0px",
                    overflow: "hidden",
                    paddingTop: "24px",
                    paddingBottom: "24px",
                    paddingRight: open ? "24px" : "0px",
                    paddingLeft: open ? "24px" : "0px",
                }}
            >
                {sideMenu === "Settings" ? (
                    <>
                        <h2 className="subMenu-title">{sideMenu}</h2>
                        <ul className="subMenu-list">
                            <li>General</li>
                            <li>
                                Vacation Manager
                                <ul>
                                    <li>Leave Types</li>
                                    <li>
                                        <NavLink
                                            to=""
                                            style={({ isActive }) =>
                                                isActive
                                                    ? { color: "blue" }
                                                    : undefined
                                            }
                                        >
                                            locations
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </>
                ) : (
                    sideMenu
                )}
            </div>
            <Button
                className="subMenu-button"
                style={{ transform: !open ? "rotate(180deg)" : "rotate(0)" }}
                icon={<img src={arrow} alt="arrow" />}
                onClick={() => setOpen(!open)}
            />
        </div>
    );
};

export default SubMenu;
