import { Avatar, Button, Col, Dropdown, Menu, Row, Space, Tooltip } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeLocation } from "../../store/locationSlice";
import {
    AntDesignOutlined,
    EllipsisOutlined,
    EditOutlined,
    StarOutlined,
    DeleteOutlined,
} from "@ant-design/icons";
import "./Card.css";
import DeleteModal from "../Popup/DeleteModal";

const Card = ({ location }) => {
    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

    const dispatch = useDispatch();

    const deleteLocation = (id) => {
        dispatch(removeLocation({ id }));
        setIsDeleteModalVisible(false);
    };
    const handleMenu = () => {
        return (
            <Menu
                items={[
                    {
                        label: (
                            <Button
                                style={{
                                    fontFamily: "Poppins",
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                    border: "none",
                                    padding: "0",
                                    width: "100%",
                                    fontSize: "13px",
                                    lineHeight: "16px",
                                    color: "#1E212A",
                                }}
                                icon={<EditOutlined />}
                            >
                                Edit
                            </Button>
                        ),
                        key: "0",
                    },
                    {
                        label: (
                            <Button
                                style={{
                                    fontFamily: "Poppins",
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                    border: "none",
                                    padding: "0",
                                    width: "100%",
                                    fontSize: "13px",
                                    lineHeight: "16px",
                                    color: "#1E212A",
                                }}
                                icon={<StarOutlined />}
                            >
                                Set as Default
                            </Button>
                        ),
                        key: "1",
                    },
                    {
                        label: (
                            <Button
                                style={{
                                    fontFamily: "Poppins",
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                    border: "none",
                                    padding: "0",
                                    width: "100%",
                                    fontSize: "13px",
                                    lineHeight: "16px",
                                    color: "#1E212A",
                                }}
                                onClick={showDeleteModal}
                                icon={<DeleteOutlined />}
                            >
                                Delete
                            </Button>
                        ),
                        key: "2",
                    },
                ]}
            />
        );
    };
    const showDeleteModal = () => {
        setIsDeleteModalVisible(true);
    };
    const handleCancel = () => {
        setIsDeleteModalVisible(false);
    };
    return (
        <div className="card">
            <div className="card-title">
                <div style={{ display: "flex" }}>
                    {location.default ? (
                        <>
                            {<a href="#">{location.name}</a>}
                            <div className="card-default">default</div>
                        </>
                    ) : (
                        <a href="#">{location.name}</a>
                    )}
                </div>

                <Dropdown
                    overlay={handleMenu()}
                    trigger={["click"]}
                    style={{ padding: "0" }}
                >
                    <a onClick={(e) => e.preventDefault()}>
                        <Button className="card-icon_button">
                            <EllipsisOutlined
                                className="card-icon"
                                rotate={90}
                            />
                        </Button>
                    </a>
                </Dropdown>
            </div>
            <div className="card-link_wrapper">
                <div>
                    <p className="card-text">Holidays</p>
                    <span>
                        <a href="#">View Holidays</a>
                    </span>
                </div>
                <div style={{ marginTop: "10px" }}>
                    <p className="card-text">Leave Policies</p>
                    <span>
                        <a href="#">View Leave Policies</a>
                    </span>
                </div>
            </div>
            <Avatar.Group
                style={{ marginTop: "16px", width: "100%" }}
                maxCount={7}
                maxPopoverTrigger="click"
                size={30}
                maxStyle={{
                    color: "#00A0EC",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                    fontweight: "600 !important",
                    fontSize: "14px",
                    lineHeight: "16px",
                }}
            >
                {location.users.map((user, i) => (
                    <Avatar
                        key={i}
                        className="card-user"
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    />
                ))}
            </Avatar.Group>
            <DeleteModal
                isDeleteModalVisible={isDeleteModalVisible}
                handleCancel={handleCancel}
                deleteLocation={deleteLocation}
                id={location.id}
            />
        </div>
    );
};

export default Card;
