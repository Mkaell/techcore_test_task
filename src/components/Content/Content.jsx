import React from "react";
import Navigation from "../../routes/Navigation";
import { Breadcrumb } from "antd";
import Layout from "antd/lib/layout/layout";
import { SettingIcon } from "../icons/Icons";
import "./Content.css";

const Content = ({ sideMenu }) => {
    return (
        <Layout className="content">
            <div className="content-wrapper">
                <Breadcrumb separator=">" style={{ marginBottom: "2px" }}>
                    <Breadcrumb.Item className="bread_crumb">
                        {sideMenu.label === "Settings" && (
                            <SettingIcon
                                style={{
                                    color: "#00A0EC",
                                    marginRight: "4px",
                                }}
                            />
                        )}
                        <span className="content-text">{sideMenu.label}</span>
                    </Breadcrumb.Item>
                    {sideMenu.label === "Settings" && (
                        <Breadcrumb.Item className="bread_crumb">
                            <span className="content-text">
                                Vacation Manager
                            </span>
                        </Breadcrumb.Item>
                    )}
                </Breadcrumb>

                <div className="site-layout-background">
                    <Navigation />
                </div>
            </div>
        </Layout>
    );
};

export default Content;
