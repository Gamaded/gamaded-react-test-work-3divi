import React, {useState} from "react";
import styled from "styled-components";

function DeviceItem (props) {
    const [color, setColor] = useState("transparent");
    const {item, isChoosen} = props;
    const deviceId = item.n;

    function setColorOfChoosen () {
        if (color === "transparent") {
            setColor("green");
        } else {
            setColor("transparent");
        }
    }

    return (
        <StyledDeviceItem
            color={color}
            onClick={() => {
                setColorOfChoosen();
                isChoosen(item);
            }}
        >
            {deviceId}
        </StyledDeviceItem>
    );
}

const StyledDeviceItem = styled.li(styledProps => ({
    "width": "100%",
    "margin-bottom": "5px",
    "padding": "7px 0",
    "border": "1px solid black",
    "text-align": "center",
    "cursor": "pointer",
    "background-color": styledProps.color,
    "transition": "background-color 0.5s",
    "&:hover": {
        "background-color": "green"
    }
}));

export default DeviceItem;
