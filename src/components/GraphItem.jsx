import React, {useEffect, useState} from "react";
import styled from "styled-components";

function GraphItem (props) {

    const {views, color, maxViewsPerWeekday} = props;
    const [elementHeight, setElementHeight] = useState(0);

    useEffect(() => {
        if (maxViewsPerWeekday !== 0) {
            setElementHeight(240 / maxViewsPerWeekday * views);
        }
        if (maxViewsPerWeekday === 0) {
            setElementHeight(0);
        }
    });

    return (
        <StyledGraphItem height={elementHeight} color={color} />
    );
}

const StyledGraphItem = styled.div(graphProps => ({
    "width": "100%",
    "height": graphProps.height,
    "background-color": graphProps.color,
    "transition": "height 0.5s"
}));

export default GraphItem;
