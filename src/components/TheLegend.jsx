import React from "react";
import styled from "styled-components";

function TheLegend () {

    return (
        <div>
            <WeekdaysWrapper>
                <WeekdaysText>{"Sun"}</WeekdaysText>
                <WeekdaysText>{"Mon"}</WeekdaysText>
                <WeekdaysText>{"Tue"}</WeekdaysText>
                <WeekdaysText>{"Wed"}</WeekdaysText>
                <WeekdaysText>{"Thu"}</WeekdaysText>
                <WeekdaysText>{"Fri"}</WeekdaysText>
                <WeekdaysText>{"Sat"}</WeekdaysText>
            </WeekdaysWrapper>
            <ColorsWrapper>
                <ColorLabelWrapper>
                    <span>{"Adult"}</span>
                    <ColorLabel color="#5351FF" />
                </ColorLabelWrapper>
                <ColorLabelWrapper>
                    <span>{"Young"}</span>
                    <ColorLabel color="#8BD8FF" />
                </ColorLabelWrapper>
                <ColorLabelWrapper>
                    <span>{"Undefined"}</span>
                    <ColorLabel color="#8492A1" />
                </ColorLabelWrapper>
                <ColorLabelWrapper>
                    <span>{"Kid"}</span>
                    <ColorLabel color="#0D9900" />
                </ColorLabelWrapper>
                <ColorLabelWrapper>
                    <span>{"Old"}</span>
                    <ColorLabel color="#FF796D" />
                </ColorLabelWrapper>
            </ColorsWrapper>
        </div>
    );
}

const WeekdaysWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    width: 93%;
`;

const WeekdaysText = styled.div`
    width: 60px;
    text-align: center;
`;

const ColorsWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 10px;
`;

const ColorLabelWrapper = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center
`;

const ColorLabel = styled.div(props => ({
    "width": "30px",
    "height": "15px",
    "margin-top": "5px",
    "background-color": props.color

}));

export default TheLegend;
