import styled from "styled-components";
import colors from "@styles/colors.json";
import typograph from "@styles/typograph.json";


export const Container = styled.section`
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`

interface ColumnProperties {
    bgMobile?: string,
    bgDesk?: string,
}

export const Column = styled.div<ColumnProperties>`
    width: 100%;
    background-image: url(${props => props.bgMobile ? props.bgMobile : props.bgDesk});
    background-size: cover;
    background-position: center;
    padding-top: 500px;
    @media (min-width: 768px) {
        background-image: url(${props => props.bgDesk ? props.bgDesk : props.bgMobile});
        width: 50vw;
        height: auto;
    }
`


export const Content = styled.div`
    padding: 15% 5%;
    text-align: center;
    max-width: 500px;
    margin: auto;
    @media (min-width: 768px) {
        padding: 10% 5%;
        margin: auto;
    }
`

interface textProperties { 
    color?: string;
}

export const Title = styled.h1<textProperties>`
    font-family: 'Fraunces';
    color: ${props => props.color};
    font-size: ${typograph.SubtitleSmall.fontSize};
    line-height: ${typograph.SubtitleSmall.lineHeight};
    font-weight: ${typograph.SubtitleSmall.fontWeight.bolder};
    margin-bottom: 30px;

    @media (min-width: 768px) {
        font-size: ${typograph.SubtitleLarge.fontSize};
        line-height: ${typograph.SubtitleLarge.lineHeight};
        font-weight: ${typograph.SubtitleLarge.fontWeight.bolder};
        margin-bottom: 60px;
    }
`

export const TextContainer = styled.p<textProperties>`
    margin-bottom: 30px;
    color: ${props => props.color};
    font-size: ${typograph.bodySmall.fontSize};
    line-height: ${typograph.bodySmall.lineHeight};
    font-weight: ${typograph.bodySmall.fontWeight.normal};
    
    @media (min-width: 768px) {
        font-size: ${typograph.bodyLarge.fontSize};
        line-height: ${typograph.bodyLarge.lineHeight};
        font-weight: ${typograph.bodyLarge.fontWeight.normal};
        margin-bottom: 60px;
    }    
`