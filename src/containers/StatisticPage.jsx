import {useDispatch, useSelector} from "react-redux";
import DeviceItem from "../components/DeviceItem";
import React from "react";
import StatisticOutput from "../components/StatisticOutput";
import styled from "styled-components";
import {toggleDevice} from "../store/actions/actions";

const StatisticPageWrapper = styled.section`
    width: 840px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px auto;
    padding: 30px 10px;
    background-color: gray;
`;

const DevicesList = styled.ul`
    width: 30%;
`;

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
            <StatisticPageWrapper>
                <DevicesList>
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
                </DevicesList>
                <StatisticOutput choosenDevices={choosenDevices()} />
            </StatisticPageWrapper>
        );
    }

}

export default StatisticPage;
