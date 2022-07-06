import React from "react";
import { Modal } from "antd";
import warning from "../../assets/icon-warning.svg";
import "./Modal.css";

const DeleteModal = ({
    isDeleteModalVisible,
    deleteLocation,
    handleCancel,
    id,
    label,
}) => {
    return (
        <Modal
            width={460}
            title="Delete Location"
            visible={isDeleteModalVisible}
            onOk={() => deleteLocation(id)}
            onCancel={handleCancel}
            footer={null}
            className="delete"
        >
            <div className="delete-content">
                <p className="delete-question">
                    Are you sure want to delete {label} Location?{" "}
                </p>
                <div style={{ display: "flex", alignItems: "flex-start" }}>
                    <img src={warning} alt="warning" className="delete-icon" />
                    <p className="delete-text">
                        Deleting a location might impact the users'
                        configuration and leave information (e.g. the initial
                        brought forward days).
                    </p>
                </div>
            </div>

            <button
                className="delete-button"
                onClick={() => deleteLocation(id)}
            >
                Yes, Delete
            </button>
        </Modal>
    );
};

export default DeleteModal;
