export function getStatisticData (data) {
    return {
        data,
        "type": "GET_STATISTIC_DATA"
    };
}

export function toggleDevice (device) {
    return {
        device,
        "type": "TOGGLE_DEVICE"
    };
}
