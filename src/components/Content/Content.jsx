import React from "react";
import Navigation from "../../routes/Navigation";
import { Breadcrumb } from "antd";
import Layout from "antd/lib/layout/layout";
const Content = ({ sideMenu }) => {
    return (
        <Layout
            className="site-layout"
            style={{ display: "flex", flexDirection: "row" }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    padding: "24px 40px",
                }}
            >
                <Breadcrumb>
                    <Breadcrumb.Item>{sideMenu}</Breadcrumb.Item>
                    <Breadcrumb.Item>Bill</Breadcrumb.Item>
                </Breadcrumb>

                <div className="site-layout-background">
                    <Navigation />
                </div>
            </div>
        </Layout>
    );
};

export default Content;
