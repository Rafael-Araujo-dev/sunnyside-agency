import styled from "styled-components";
import colors from "@styles/colors.json";
import typograph from "@styles/typograph.json";


export const Container = styled.section`
    display: flex;
    flex-direction: column;
    background-color: ${colors.neutral100};

    @media (min-width: 768px) {
        flex-direction: row;
    }
`

interface ContentProperties { 
    order?: number;
}
export const Content = styled.div<ContentProperties>`
    padding: 15% 10%;
    text-align: center;

    @media (min-width: 768px) {
        width: calc(50vw - 10%);
        padding: 10% 5%;
        margin: auto;
        text-align: left;
        order: ${props => props.order};
    }
`

interface textProperties { 
    color?: string;
}

export const Title = styled.h2<textProperties>`
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

export const Link = styled.a<textProperties>`
    font-family: 'Fraunces';
    text-decoration: none;
    text-transform: uppercase;
    color: ${colors.neutral500};
    font-size: ${typograph.bodySmall.fontSize};
    line-height: ${typograph.bodySmall.lineHeight};
    font-weight: ${typograph.bodySmall.fontWeight.bolder};
    position: relative;
    z-index: 2;
    &:after {
        position: absolute;
        background-color: ${props => props.color};
        width: 100%;
        height: 12px;
        content: "";
        padding: 0 10px;
        border-radius: 4px;
        bottom: 0;
        left: -10px;
        z-index: -1;
        transition: all .2s ease;
    }
    @media (min-width: 768px) {
        font-size: ${typograph.bodyLarge.fontSize};
        line-height: ${typograph.bodyLarge.lineHeight};
        font-weight: ${typograph.bodyLarge.fontWeight.bolder};
        margin-left: 10px;
    }    

    &:hover { 
        &:after {
            height: 100%;
        }
    }
`

interface ImageContainerProps {
    bgMobile?: string,
    bgDesk?: string,
}

export const ImageContainer = styled.div<ImageContainerProps>`
    height: 50vh;
    width: 100%;
    background-image: url(${props => props.bgMobile ? props.bgMobile : props.bgDesk});
    background-size: cover;
    background-position: center;
    @media (min-width: 768px) {
        background-image: url(${props => props.bgDesk ? props.bgDesk : props.bgMobile});
        width: 50vw;
        height: auto;
    }
`