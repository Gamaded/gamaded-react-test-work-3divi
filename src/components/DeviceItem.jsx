import React from "react";

function DeviceItem (props) {
    const {item, isChoosen} = props;
    const deviceId = item.n;
    return (
        <li onClick={() => {
            isChoosen(item);
        }}
        >
            {deviceId}
        </li>
    );
}

export default DeviceItem;
