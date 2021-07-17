import React from "react";
import StatisticOutputWeekday from "./StatisticOutputWeekday";
import styled from "styled-components";
import TheLegend from "./TheLegend";

function StatisticOutput (props) {
    const devicesDataByWeekday = {
        "0": {"adult": 0, "kid": 0, "old": 0, "undefined": 0, "young": 0, "totalViewsPerWeekday": 0},
        "1": {"adult": 0, "kid": 0, "old": 0, "undefined": 0, "young": 0, "totalViewsPerWeekday": 0},
        "2": {"adult": 0, "kid": 0, "old": 0, "undefined": 0, "young": 0, "totalViewsPerWeekday": 0},
        "3": {"adult": 0, "kid": 0, "old": 0, "undefined": 0, "young": 0, "totalViewsPerWeekday": 0},
        "4": {"adult": 0, "kid": 0, "old": 0, "undefined": 0, "young": 0, "totalViewsPerWeekday": 0},
        "5": {"adult": 0, "kid": 0, "old": 0, "undefined": 0, "young": 0, "totalViewsPerWeekday": 0},
        "6": {"adult": 0, "kid": 0, "old": 0, "undefined": 0, "young": 0, "totalViewsPerWeekday": 0}
    };

    const {choosenDevices} = props;

    choosenDevices.forEach(device => {
        device.o.forEach(date => {
            const day = new Date(date.n);
            const dayOfViews = day.getDay();
            date.o.forEach(ageViews => {
                devicesDataByWeekday[dayOfViews].totalViewsPerWeekday += ageViews.v;
                devicesDataByWeekday[dayOfViews][ageViews.n] += ageViews.v;
            });
        });
    });

    function getMaxViews (valueFromChoosenDevices) {
        let maxViews = 0;
        for (const weekday in valueFromChoosenDevices) {
            if (valueFromChoosenDevices[weekday].totalViewsPerWeekday > maxViews) {
                maxViews = valueFromChoosenDevices[weekday].totalViewsPerWeekday;
            }
        }
        return maxViews;
    }

    const maxViewsPerWeekday = getMaxViews(devicesDataByWeekday);

    return (
        <StatisticOutputStyled>
            <h3>{"Total views: Age (by day of week)"}</h3>
            <GraphPlaneAndValues>
                <GraphPlane>
                    <StatisticOutputWeekday weekdayData={devicesDataByWeekday["0"]} maxViewsPerWeekday={maxViewsPerWeekday} />
                    <StatisticOutputWeekday weekdayData={devicesDataByWeekday["1"]} maxViewsPerWeekday={maxViewsPerWeekday} />
                    <StatisticOutputWeekday weekdayData={devicesDataByWeekday["2"]} maxViewsPerWeekday={maxViewsPerWeekday} />
                    <StatisticOutputWeekday weekdayData={devicesDataByWeekday["3"]} maxViewsPerWeekday={maxViewsPerWeekday} />
                    <StatisticOutputWeekday weekdayData={devicesDataByWeekday["4"]} maxViewsPerWeekday={maxViewsPerWeekday} />
                    <StatisticOutputWeekday weekdayData={devicesDataByWeekday["5"]} maxViewsPerWeekday={maxViewsPerWeekday} />
                    <StatisticOutputWeekday weekdayData={devicesDataByWeekday["6"]} maxViewsPerWeekday={maxViewsPerWeekday} />
                </GraphPlane>
                <GraphPlaneValues>
                    <span>{maxViewsPerWeekday}</span>
                    <span>{maxViewsPerWeekday * 0.75}</span>
                    <span>{maxViewsPerWeekday / 2}</span>
                    <span>{maxViewsPerWeekday * 0.25}</span>
                </GraphPlaneValues>
            </GraphPlaneAndValues>
            <TheLegend />
        </StatisticOutputStyled>
    );
}

const StatisticOutputStyled = styled.div`
    width: 70%;
    margin-left: 20px;
`;

const GraphPlane = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-end;
    width: 531px;
    height: 300px;
    border: 1px solid black;
    background-color: #ffffff;
    background-size: 76px 60px;
    background-image:
        linear-gradient(to right, grey 1px, transparent 1px),
        linear-gradient(to bottom, grey 1px, transparent 1px);
`;

const GraphPlaneAndValues = styled.div`
    display: flex;
    align-items: center;
`;

const GraphPlaneValues = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 200px;
    margin-left: 5px;
`;

export default StatisticOutput;
