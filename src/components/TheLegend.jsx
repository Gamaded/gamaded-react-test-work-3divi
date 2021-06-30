import React from "react";
import styled from "styled-components";

function TheLegend () {

    return (
        <TheLegendWrapper>
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
        </TheLegendWrapper>
    );
}

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

const TheLegendWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
`;

export default TheLegend;
