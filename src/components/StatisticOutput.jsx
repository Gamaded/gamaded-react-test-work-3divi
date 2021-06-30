import React from "react";
import StatisticOutputWeekday from "./StatisticOutputWeekday";
import styled from "styled-components";
import TheLegend from "./TheLegend";

const GraphPlane = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-end;
    width: 100%;
    height: 300px;
    margin-left: 20px;
    border: 1px solid black;
`;

function StatisticOutput (props) {
    const devicesDataByWeekday = {
        "0": {"adult": 0, "kid": 0, "old": 0, "undefined": 0, "young": 0},
        "1": {"adult": 0, "kid": 0, "old": 0, "undefined": 0, "young": 0},
        "2": {"adult": 0, "kid": 0, "old": 0, "undefined": 0, "young": 0},
        "3": {"adult": 0, "kid": 0, "old": 0, "undefined": 0, "young": 0},
        "4": {"adult": 0, "kid": 0, "old": 0, "undefined": 0, "young": 0},
        "5": {"adult": 0, "kid": 0, "old": 0, "undefined": 0, "young": 0},
        "6": {"adult": 0, "kid": 0, "old": 0, "undefined": 0, "young": 0}
    };

    const {choosenDevices} = props;

    choosenDevices.forEach(device => {
        device.o.forEach(date => {
            const day = new Date(date.n);
            const dayOfViews = day.getDay();
            date.o.forEach(ageViews => {
                devicesDataByWeekday[dayOfViews][ageViews.n] += ageViews.v;
            });
        });
    });

    return (
        <div>
            <GraphPlane>
                <StatisticOutputWeekday weekdayData={devicesDataByWeekday["0"]} />
                <StatisticOutputWeekday weekdayData={devicesDataByWeekday["1"]} />
                <StatisticOutputWeekday weekdayData={devicesDataByWeekday["2"]} />
                <StatisticOutputWeekday weekdayData={devicesDataByWeekday["3"]} />
                <StatisticOutputWeekday weekdayData={devicesDataByWeekday["4"]} />
                <StatisticOutputWeekday weekdayData={devicesDataByWeekday["5"]} />
                <StatisticOutputWeekday weekdayData={devicesDataByWeekday["6"]} />
            </GraphPlane>
            <TheLegend />
        </div>
    );
}

export default StatisticOutput;
