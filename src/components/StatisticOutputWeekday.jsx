import React from "react";
import styled from "styled-components";
import GraphItem from "./GraphItem";

const GraphWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    width: 60px;
    height: 100%;
`;

function StatisticOutputWeekday (props) {
    const {weekdayData} = props;
    console.log(weekdayData);

    return (
        <GraphWrapper>
            <GraphItem views={weekdayData.adult} color="#5351FF" />
            <GraphItem views={weekdayData.kid} color="#0D9900" />
            <GraphItem views={weekdayData.old} color="#FF796D" />
            <GraphItem views={weekdayData.undefined} color="#8492A1" />
            <GraphItem views={weekdayData.young} color="#8BD8FF" />
        </GraphWrapper>
    );
}

export default StatisticOutputWeekday;
