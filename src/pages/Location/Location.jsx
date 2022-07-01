import React from "react";
import Card from "../../components/Card/Card";

const Location = () => {
    return (
        <>
            <div>
                <h2>Location</h2>
                <p>
                    Create new users or update the existng users. You can then
                    set their permissons here too.{" "}
                </p>
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
