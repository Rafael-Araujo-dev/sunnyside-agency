//Dependencies
import styled from "styled-components";
import colors from "@styles/colors.json";
import typograph from "@styles/typograph.json";

export const Grid = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    min-height: 500px;

    @media (min-width: 768px) {
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: 1fr;
    }
`

interface ItemProperties {
    desk?: string;
    mobile?: string;
}

export const Item = styled.div<ItemProperties>`
    background-image: url(${props => props.mobile ? props.mobile : props.desk});

    @media (min-width: 768px) {
        background-image: url(${props => props.desk ? props.desk : props.mobile});
    }
    background-size: cover;
    background-position: center;
`