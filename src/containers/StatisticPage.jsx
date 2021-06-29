import DeviceItem from "../components/DeviceItem";
import React from "react";
import {useSelector} from "react-redux";

function StatisticPage () {
    const usersDefaultData = useSelector(state => state.defaultData);
    const usersCustomData = useSelector(state => state.customData);
    const isLoading = useSelector(state => state.isLoading);

    console.log(usersCustomData);
    console.log(usersDefaultData);

    if (isLoading === true) {
        return (
            <div>
                {"Please wait"}
            </div>
        );
    }

    if (isLoading === false) {
        return (
            <ul>
                {
                    usersDefaultData.map(item => {
                        return (
                            <DeviceItem item={item} key={item.n} />
                        );
                    })
                }
            </ul>
        );
    }

}

export default StatisticPage;
