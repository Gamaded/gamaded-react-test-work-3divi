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
        const isChoosen = state.customData.find(item => item.n === action.device.n);
        if (isChoosen === undefined) {
            state.customData = [...state.customData, action.device];
        }
        if (isChoosen !== undefined) {
            const splicedCustomData = [...state.customData];
            splicedCustomData.splice(state.customData.indexOf(isChoosen), 1);
            state.customData = splicedCustomData;
        }
        return state;

    default: return state;
    }
}

export default usersData;
