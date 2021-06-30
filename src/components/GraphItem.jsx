import React, {useEffect, useState} from "react";
import styled from "styled-components";

function GraphItem (props) {

    const {views, color} = props;
    const [elementHeight, setElementHeight] = useState(0);

    const maxValue = 20;

    useEffect(() => {
        setElementHeight(280 / maxValue * views);
    });

    return (
        <StyledGraphItem elementHeight={elementHeight} color={color} />
    );
}

const StyledGraphItem = styled.div(styleProps => ({
    "width": "20%",
    "height": styleProps.elementHeight + "px",
    "background-color": styleProps.color,
    "transition": "height 0.5s"
}));

export default GraphItem;
