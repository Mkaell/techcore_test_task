import {
    Button,
    Checkbox,
    Col,
    Form,
    Input,
    InputNumber,
    Modal,
    Row,
    Select,
} from "antd";
import { useDispatch } from "react-redux";
import { addLocation } from "../../store/locationSlice";

import React, { useState } from "react";
import { months, timeZones, validateMessages } from "../../utils/testdata";
import InputTags from "../FormComponent/InputTags";
import { Tag } from "antd";

import { people } from "../../utils/testdata";
const { Option } = Select;
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

const tagRender = (props) => {
    const { label, value, closable, onClose } = props;

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
                marginRight: 3,
                background: "#EEF7FC",
                color: "#00A0EC",
            }}
        >
            {label}
        </Tag>
    );
};
const Popup = ({ isModalVisible, setIsModalVisible }) => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const [expireDate, setExpireDate] = useState(false);
    const [defaultLocation, setDefaultLocation] = useState(false);

    const onCheckboxChange = (e, setState) => {
        setState(e.target.checked);
    };
    const handleCancel = () => {
        form.resetFields();
        setIsModalVisible(false);
    };
    const onFinish = (values) => {
        console.log(values);
        dispatch(addLocation({ values }));
        form.resetFields();
        setIsModalVisible(false);
    };
    return (
        <>
            <Modal
                width={550}
                title="Basic Modal"
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={null}
                getContainer={false}
            >
                <Form
                    {...layout}
                    name="nest-messages"
                    onFinish={onFinish}
                    form={form}
                    // labelWrap
                    layout="vertical"
                    validateMessages={validateMessages}
                >
                    <Form.Item
                        name={["location", "name"]}
                        label="Name"
                        rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name={["location", "workWeek"]}
                        label="Work week"
                    >
                        <Checkbox.Group>
                            <Row>
                                <Col span={8}>
                                    <Checkbox
                                        value="Sunday"
                                        style={{ lineHeight: "32px" }}
                                    >
                                        Sunday
                                    </Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox
                                        value="Monday"
                                        style={{ lineHeight: "32px" }}
                                    >
                                        Monday
                                    </Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox
                                        value="Tuesday"
                                        style={{ lineHeight: "32px" }}
                                    >
                                        Tuesday
                                    </Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox
                                        value="Wednesday"
                                        style={{ lineHeight: "32px" }}
                                    >
                                        Wednesday
                                    </Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox
                                        value="Thursday"
                                        style={{ lineHeight: "32px" }}
                                    >
                                        Thursday
                                    </Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox
                                        value="Friday"
                                        style={{ lineHeight: "32px" }}
                                    >
                                        Friday
                                    </Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox
                                        value="Saturday"
                                        style={{ lineHeight: "32px" }}
                                    >
                                        Saturday
                                    </Checkbox>
                                </Col>
                            </Row>
                        </Checkbox.Group>
                    </Form.Item>
                    <Form.Item
                        name={["location", "select"]}
                        label="Leave Quota Reset Based On"
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: "Please select your country!",
                            },
                        ]}
                        initialValue="Accounting year"
                    >
                        <Select>
                            <Option value="Accounting year">
                                Accounting year
                            </Option>
                            <Option value="User Employment Date">
                                User Employment Date
                            </Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Fiscal year start"
                        style={{ marginBottom: 0 }}
                        required
                    >
                        <Form.Item
                            name={["location", "yearStartMounth"]}
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: "Please select fiscal year start!",
                                },
                            ]}
                            style={{
                                display: "inline-block",
                                width: "calc(50% - 8px)",
                            }}
                            initialValue="January"
                        >
                            <Select style={{ width: "125px" }}>
                                {months.map((month) => (
                                    <Option value={month}>{month}</Option>
                                ))}
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name={["location", "yearStartDate"]}
                            initialValue={1}
                            rules={[{ required: true }]}
                            style={{
                                display: "inline-block",
                                width: "calc(50% - 8px)",
                                margin: "0 8px",
                            }}
                        >
                            <InputNumber min={1} max={31} />
                        </Form.Item>
                    </Form.Item>
                    <Form.Item
                        name={["location", "forwardExpiryDate"]}
                        valuePropName="checked"
                        initialValue={false}
                    >
                        <Checkbox
                            checked={expireDate}
                            onChange={(e) => onCheckboxChange(e, setExpireDate)}
                        >
                            No Brought Forward Expiry Date
                        </Checkbox>
                    </Form.Item>
                    <Form.Item
                        name={["location", "weekStartsOn"]}
                        hasFeedback
                        label="Week Starts On"
                        rules={[
                            {
                                required: true,
                                // message: "Please select fiscal year start!",
                            },
                        ]}
                        initialValue="Monday"
                    >
                        <Select>
                            <Option value="Monday">Monday</Option>
                            <Option value="Sunday">Sunday</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name={["location", "timeZone"]}
                        hasFeedback
                        label="Time Zone"
                        rules={[
                            {
                                required: true,
                                // message: "Please select fiscal year start!",
                            },
                        ]}
                        initialValue="GMT+03:00 Europe/Minsk"
                    >
                        <Select>
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
                    <Form.Item
                        name={["location", "people"]}
                        label="Users"
                        rules={[{ required: true }]}
                    >
                        <Select
                            mode="multiple"
                            showArrow
                            tagRender={tagRender}
                            style={{
                                width: "100%",
                            }}
                            options={people}
                        />
                    </Form.Item>
                    <Form.Item
                        name={["location", "locationDefault"]}
                        valuePropName="checked"
                        initialValue={false}
                    >
                        <Checkbox
                            checked={defaultLocation}
                            onChange={(e) =>
                                onCheckboxChange(e, setDefaultLocation)
                            }
                        >
                            Make This Location Default
                        </Checkbox>
                    </Form.Item>
                    <div
                        style={{
                            background: "#EEF7FC",
                            borderRadius: "6px",
                            padding: "8px 12px",
                        }}
                    >
                        <p>
                            Once you've created a Location, assign a
                            <span>Leave Policy</span> to the Location, in order
                            to enable Users to request Leave. To assign a Leave
                            Policy, go to Location {">"} Leave Policies {">"}
                            Assign Leave Policy.
                        </p>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            height: "auto",
                        }}
                    >
                        <Form.Item
                            style={{
                                display: "inline-block",
                                margin: "0 8px 0",
                            }}
                        >
                            <Button
                                style={{
                                    background: "#AFB6C6",
                                    color: "#fff",
                                    borderRadius: "6px",
                                }}
                                onClick={handleCancel}
                            >
                                CANSEL
                            </Button>
                        </Form.Item>
                        <Form.Item
                            style={{
                                display: "inline-block",
                                margin: "0 ",
                            }}
                        >
                            <Button
                                style={{
                                    borderRadius: "6px",
                                }}
                                type="primary"
                                htmlType="submit"
                            >
                                Create
                            </Button>
                        </Form.Item>
                    </div>
                </Form>
            </Modal>
        </>
    );
};

export default Popup;
