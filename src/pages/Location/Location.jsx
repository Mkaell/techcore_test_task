import React, { useState } from "react";
import Card from "../../components/Card/Card";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import "./Location.css";
import Popup from "../../components/Popup/Popup";
const Location = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const locations = useSelector((state) => state.locations.locations);

    const showModal = () => {
        setIsModalVisible(true);
    };

    return (
        <>
            <div className="location-title_wrapper">
                <div>
                    <h2 className="location-title">Location</h2>
                    <p className="location-text">
                        Create new users or update the existng users. You can
                        then set their permissons here too.{" "}
                    </p>
                </div>
                <button className="location-button" onClick={showModal}>
                    Create Location
                </button>
            </div>
            <div className="location-cards_wrapper">
                {locations.map((location) => (
                    <Card location={location} key={location.id} />
                ))}
            </div>
            <Popup
                showModal={showModal}
                isModalVisible={isModalVisible}
                setIsModalVisible={setIsModalVisible}
            />
        </>
    );
};

export default Location;
