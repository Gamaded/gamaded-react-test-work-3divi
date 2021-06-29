function usersData (state = {
    "customData": [],
    "defaultData": [],
    "isLoading": true
}, action) {
    switch (action.type) {
    case "GET_STATISTIC_DATA":
        state.isLoading = false;
        state.defaultData = action.data.data.o;
        return state;

    case "TOGGLE_DEVICE":
        if (action.device.choosen === true)

    default: return state;
    }
}

export default usersData;
