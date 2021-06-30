import {useDispatch, useSelector} from "react-redux";
import DeviceItem from "../components/DeviceItem";
import React from "react";
import StatisticOutput from "../components/StatisticOutput";
import {toggleDevice} from "../store/actions/actions";

function StatisticPage () {
    const usersDefaultData = useSelector(state => state.defaultData);
    const usersCustomData = useSelector(state => state.customData);
    const isLoading = useSelector(state => state.isLoading);
    const dispatch = useDispatch();

    function isChoosen (device) {
        dispatch(toggleDevice(device));
    }

    function choosenDevices () {
        if (usersCustomData.length === 0) {
            return usersDefaultData;
        }
        if (usersCustomData.length !== 0) {
            return usersCustomData;
        }
        return null;
    }

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
                            <DeviceItem
                                item={item}
                                key={item.n}
                                isChoosen={isChoosen}
                            />
                        );
                    })
                }
                <StatisticOutput choosenDevices={choosenDevices()} />
            </ul>
        );
    }

}

export default StatisticPage;
