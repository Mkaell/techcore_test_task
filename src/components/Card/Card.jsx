import { Button } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { removeLocation } from "../../store/locationSlice";

import "./Card.css";
const Card = ({ location }) => {
    const dispatch = useDispatch();
    const deleteLocation = (id) => {
        console.log(id);
        dispatch(removeLocation({ id }));
    };
    return (
        <div className="card">
            <div>{location.name}</div>
            <div>{location.id}</div>
            <div>Users</div>
            <Button onClick={() => deleteLocation(location.id)}>delete</Button>
        </div>
    );
};

export default Card;
