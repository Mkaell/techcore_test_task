import React from "react";
import Card from "../../components/Card/Card";
import { Button } from "antd";
import "./Location.css";
const Location = () => {
    return (
        <>
            <div className="location-title_wrapper">
                <div>
                    <h2>Location</h2>
                    <p>
                        Create new users or update the existng users. You can
                        then set their permissons here too.{" "}
                    </p>
                </div>

                <Button>Create Location</Button>
            </div>
            <div
                style={{
                    display: "flex",
                    width: "100%",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                }}
            >
                <Card />
                <Card />
                <Card />
            </div>
        </>
    );
};

export default Location;
