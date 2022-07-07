import {
    Checkbox,
    Col,
    Form,
    Input,
    InputNumber,
    Modal,
    Row,
    Select,
    Tooltip,
} from "antd";
import { useDispatch } from "react-redux";
import { addLocation } from "../../store/locationSlice";
import React, { useState } from "react";
import {
    days,
    months,
    timeZones,
    validateMessages,
} from "../../utils/testdata";
import { Tag } from "antd";
import { users } from "../../utils/testdata";
import { ArrowsIcon, InfoIcon, WarningIcon } from "../icons/Icons";
const { Option } = Select;

const FormModal = ({ isModalVisible, setIsModalVisible }) => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const [infoText, setInfoText] = useState(0);
    const [expireDate, setExpireDate] = useState(false);
    const [defaultLocation, setDefaultLocation] = useState(false);

    const onCheckboxChange = (e, setState) => {
        setState(e.target.checked);
    };
    const handleCancel = () => {
        form.resetFields();
        setInfoText(0);
        setIsModalVisible(false);
    };
    const onFinish = (values) => {
        console.log(values);
        dispatch(addLocation({ ...values }));
        form.resetFields();
        setInfoText(0);
        setIsModalVisible(false);
    };
    return (
        <>
            <Modal
                width={550}
                style={{ top: 40 }}
                title="Create Location"
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={null}
                getContainer={false}
            >
                <Form
                    name="form-location"
                    className="form-location"
                    onFinish={onFinish}
                    form={form}
                    layout="horizontal"
                    validateMessages={validateMessages}
                >
                    <Form.Item
                        name={["location", "name"]}
                        label="Name"
                        rules={[{ required: true }]}
                        className="form-label"
                    >
                        <Input placeholder="Location Name" />
                    </Form.Item>
                    <Form.Item
                        name={["location", "work_week"]}
                        label="Work week"
                        rules={[{ required: true }]}
                        className="form-work_week"
                        style={{ marginBottom: "24px" }}
                    >
                        <Checkbox.Group>
                            <Row justify="start" style={{ columnGap: "40px" }}>
                                {days.map((day, i) => (
                                    <Col style={{ width: "90px" }} key={i}>
                                        <Checkbox
                                            value={day}
                                            style={{
                                                lineHeight: "32px",
                                                display: "flex",
                                                justifyContent: "flex-start",
                                            }}
                                        >
                                            {day}
                                        </Checkbox>
                                    </Col>
                                ))}
                            </Row>
                        </Checkbox.Group>
                    </Form.Item>
                    <Form.Item
                        label="Leave Quota Reset Based On"
                        className="form-label form-info"
                    >
                        <Form.Item
                            name={["location", "quota_reset"]}
                            initialValue="Accounting year"
                            noStyle
                        >
                            <Select
                                placeholder="Accounting year"
                                suffixIcon={<ArrowsIcon />}
                            >
                                <Option value="Accounting year">
                                    Accounting year
                                </Option>
                                <Option value="User Employment Date">
                                    User Employment Date
                                </Option>
                            </Select>
                        </Form.Item>
                        <Tooltip
                            title="This setting will determine if your leave balance will be reset based on the accounting year (company's fiscal year) or based on the employee's start date. Besides quotas, your roll-over policy will also be affected according to this setting."
                            placement="topLeft"
                        >
                            <InfoIcon className="form-icon" color="#1E212A" />
                        </Tooltip>
                    </Form.Item>

                    <Form.Item
                        label="Fiscal Year Start"
                        style={{ marginBottom: 0 }}
                        className="form-label"
                    >
                        <Form.Item
                            name={["location", "year_start_mounth"]}
                            rules={[
                                {
                                    required: true,
                                    message: "Please select fiscal year start!",
                                },
                            ]}
                            style={{
                                display: "inline-block",
                                width: "125px",
                            }}
                            initialValue="January"
                        >
                            <Select suffixIcon={<ArrowsIcon />}>
                                {months.map((month, i) => (
                                    <Option value={month} key={i}>
                                        {month}
                                    </Option>
                                ))}
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name={["location", "year_start_date"]}
                            initialValue={1}
                            rules={[{ required: true }]}
                            style={{
                                display: "inline-block",
                                width: "80px",
                                margin: "0 8px",
                            }}
                        >
                            <InputNumber
                                prefix={<ArrowsIcon />}
                                min={1}
                                max={31}
                                width="80px"
                                height={48}
                            />
                        </Form.Item>
                    </Form.Item>
                    <Form.Item className="form-info">
                        <Form.Item
                            name={["location", "expiry_date"]}
                            valuePropName="checked"
                            initialValue={false}
                            noStyle
                        >
                            <Checkbox
                                checked={expireDate}
                                onChange={(e) =>
                                    onCheckboxChange(e, setExpireDate)
                                }
                            >
                                <span className="form-label_checkbox">
                                    No Brought Forward Expiry Date
                                </span>
                            </Checkbox>
                        </Form.Item>
                        <Tooltip title="Each year, the user's rolled over leaves will expire on the date you set. The quotas for each leave type are configured through the Leave Types section for this location and each can be set individually to allow or not allow roll overs.">
                            <InfoIcon
                                className="form-icon form-icon_checkbox"
                                color="#1E212A"
                            />
                        </Tooltip>
                    </Form.Item>

                    <Form.Item
                        name={["location", "week_starts_on"]}
                        label="Week Starts On"
                        className="form-label"
                        style={{ width: "145px" }}
                        initialValue="Monday"
                    >
                        <Select suffixIcon={<ArrowsIcon />}>
                            <Option value="Monday">Monday</Option>
                            <Option value="Sunday">Sunday</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        className="form-label form-info"
                        label="Time Zone"
                        required
                    >
                        <Form.Item name={["location", "time_zone"]} noStyle>
                            <Select
                                placeholder="GMT+03:00 Europe/Minsk"
                                suffixIcon={<ArrowsIcon />}
                            >
                                {timeZones.map((zone, i) => (
                                    <Option
                                        key={i}
                                        value={zone.offset + " " + zone.name}
                                    >
                                        {zone.offset} {zone.name}
                                    </Option>
                                ))}
                            </Select>
                        </Form.Item>
                        <Tooltip
                            title="This default time zone is used throughout the system. For example for accurately displaying leave information in the calendar and for the system events listed in the Logs."
                            placement="topLeft"
                        >
                            <InfoIcon className="form-icon" color="#1E212A" />
                        </Tooltip>
                    </Form.Item>

                    <Form.Item label="Users" className="form-label">
                        <Form.Item name={["location", "users"]} noStyle>
                            <Select
                                onChange={(e) => setInfoText(e)}
                                placeholder="Add Users"
                                mode="multiple"
                                showArrow
                                suffixIcon={<ArrowsIcon />}
                                tagRender={tagRender}
                                style={{
                                    width: "100%",
                                }}
                                options={users}
                            />
                        </Form.Item>
                        {infoText ? (
                            <div className="form-users_warning ">
                                <WarningIcon style={{ marginRight: "8px" }} />
                                <p>
                                    Adding or removing a user might impact the
                                    user's configuration and leave information
                                    (e.g. the initial brought forward days).
                                </p>
                            </div>
                        ) : null}
                    </Form.Item>

                    <Form.Item
                        name={["location", "default"]}
                        valuePropName="checked"
                        initialValue={false}
                        className="form-info"
                    >
                        <Checkbox
                            checked={defaultLocation}
                            onChange={(e) =>
                                onCheckboxChange(e, setDefaultLocation)
                            }
                        >
                            <span className="form-label_checkbox">
                                Make This Location Default
                            </span>
                        </Checkbox>
                        <Tooltip title="By making this Location the default one, all new team members will be automatically added to this Location.">
                            <InfoIcon
                                className="form-icon form-icon_checkbox"
                                color="#1E212A"
                            />
                        </Tooltip>
                    </Form.Item>
                    <div className="form-leave_police">
                        <p className="form-leave_police__text">
                            Once you've created a Location, assign a{" "}
                            <a href="#" className="form-leave_police__link">
                                Leave Policy
                            </a>{" "}
                            to the Location, in order to enable Users to request
                            Leave. To assign a Leave Policy, go to Location{" "}
                            {">"} Leave Policies {">"}
                            Assign Leave Policy.
                        </p>
                    </div>
                    <div className="form-button_wrapper">
                        <Form.Item
                            style={{
                                display: "inline-block",
                                margin: "0 8px 0",
                            }}
                        >
                            <button
                                className="form-button form-button_cancel"
                                onClick={handleCancel}
                            >
                                Cancel
                            </button>
                        </Form.Item>
                        <Form.Item
                            style={{
                                display: "inline-block",
                                margin: "0 ",
                            }}
                        >
                            <button
                                className="form-button form-button_create"
                                type="submit"
                            >
                                Create
                            </button>
                        </Form.Item>
                    </div>
                </Form>
            </Modal>
        </>
    );
};

export default FormModal;

const tagRender = (props) => {
    const { label, closable, onClose } = props;

    const onPreventMouseDown = (event) => {
        event.preventDefault();
        event.stopPropagation();
    };

    return (
        <Tag
            onMouseDown={onPreventMouseDown}
            closable={closable}
            onClose={onClose}
            style={{
                marginRight: 4,
                background: "#EEF7FC",
                color: "#00A0EC",
                border: "none",
                padding: "4px 8px",
            }}
        >
            {label}
        </Tag>
    );
};
