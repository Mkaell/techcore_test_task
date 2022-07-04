import "./App.css";
import SideMenu from "./components/SideMenu/SideMenu";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./routes/Navigation";
import Layout from "antd/lib/layout/layout";
import Content from "./components/Content/Content";
import { useState } from "react";

function App() {
    const [open, setOpen] = useState(true);
    const [sideMenu, setSideMenu] = useState({
        label: "Settings",
        path: "settings",
    });

    return (
        <>
            <BrowserRouter>
                <Layout
                    style={{
                        minHeight: "100vh",
                        display: "flex",
                        flexDirection: "row",
                    }}
                >
                    <SideMenu
                        open={open}
                        setOpen={setOpen}
                        sideMenu={sideMenu}
                        setSideMenu={setSideMenu}
                    />
                    <Content sideMenu={sideMenu} />
                </Layout>
            </BrowserRouter>
        </>
    );
}

export default App;
