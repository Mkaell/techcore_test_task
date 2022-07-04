import { Select, Tag } from "antd";
import React from "react";
import { people } from "../../utils/testdata";
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
            }}
        >
            {label}
        </Tag>
    );
};

const InputTags = () => {
    return (
        <Select
            mode="multiple"
            showArrow
            tagRender={tagRender}
            // defaultValue={["gold", "cyan"]}
            style={{
                width: "100%",
            }}
            options={people}
        />
    );
};

export default InputTags;
