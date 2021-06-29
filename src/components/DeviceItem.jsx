import React from "react";

function DeviceItem (props) {
    const {item} = props;
    const deviceId = item.n;
    return (
        <li>
            {deviceId}
        </li>
    );
}

export default DeviceItem;
