import React from "react";
import styled from "styled-components";
import GraphItem from "./GraphItem";

function StatisticOutputWeekday (props) {
    const {weekdayData, maxViewsPerWeekday} = props;

    return (
        <GraphWrapper>
            <GraphItem views={weekdayData.adult} color="#5351FF" maxViewsPerWeekday={maxViewsPerWeekday} />
            <GraphItem views={weekdayData.kid} color="#0D9900" maxViewsPerWeekday={maxViewsPerWeekday} />
            <GraphItem views={weekdayData.old} color="#FF796D" maxViewsPerWeekday={maxViewsPerWeekday} />
            <GraphItem views={weekdayData.undefined} color="#8492A1" maxViewsPerWeekday={maxViewsPerWeekday} />
            <GraphItem views={weekdayData.young} color="#8BD8FF" maxViewsPerWeekday={maxViewsPerWeekday} />
        </GraphWrapper>
    );
}

const GraphWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 60px;
    height: 100%;
`;

export default StatisticOutputWeekday;
