import arrow from "../../assets/Arrow.svg";
import { Button } from "antd";
import { NavLink } from "react-router-dom";
import "./SubMenu.css";
import { SettingGeneralIcon, SettingVacationIcon } from "../icons/Icons";

const SubMenu = ({ open, sideMenu, setOpen }) => {
    return (
        <div style={{ position: "relative" }}>
            <div
                className="subMenu"
                style={{
                    width: open ? "240px" : "0px",
                }}
            >
                {sideMenu.label === "Settings" ? (
                    <>
                        <h2 className="subMenu-title">{sideMenu.label}</h2>
                        <div className="subMenu-list">
                            <div className="subMenu-list_item">
                                <span className="subMenu-list_item_wrapper">
                                    <SettingGeneralIcon className="subMenu-list_item_icon" />
                                    General
                                </span>
                            </div>

                            <div className="subMenu-list_item ">
                                <span className="subMenu-list_item_wrapper active">
                                    <SettingVacationIcon className="subMenu-list_item_icon active" />
                                    Vacation Manager
                                </span>
                            </div>
                        </div>
                        <div className="subMenu-nested-list_item">
                            Leave Types
                        </div>
                        <div className="subMenu-nested-list_item active">
                            <NavLink
                                to=""
                                style={({ isActive }) =>
                                    isActive ? { color: "#00a0ec" } : undefined
                                }
                            >
                                Locations
                            </NavLink>
                        </div>
                    </>
                ) : (
                    <h2 className="subMenu-title">{sideMenu.label}</h2>
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
