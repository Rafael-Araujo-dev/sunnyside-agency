//Dependencies
import styled from "styled-components";
import colors from "@styles/colors.json";
import typograph from "@styles/typograph.json";

export const Container = styled.section`
    background-color: ${colors.neutral100};
    padding: 80px 5%;

    @media (min-width: 768px) {
        padding: 180px 5%;
    }
`

export const Title = styled.h1`
    font-family: 'Fraunces';
    text-align: center;
    text-transform: uppercase;
    color: ${colors.neutral200};
    letter-spacing: 0.3rem;
    font-size: ${typograph.bodySmall.fontSize};
    font-weight: ${typograph.bodySmall.fontWeight.bold};
    line-height: ${typograph.bodySmall.lineHeight};
    margin-bottom: 60px;

    @media (min-width: 768px) {
        font-size: ${typograph.bodyLarge.fontSize};
        font-weight: ${typograph.bodyLarge.fontWeight.bolder};
        line-height: ${typograph.bodyLarge.lineHeight};
        margin-bottom: 90px;
    }
`

export const Items = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 80px;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 40px;
    img {
        border-radius: 100%;
    }

    @media (min-width: 768px) {
        row-gap: 80px;
    }
`

export const Commentary = styled.p`
    text-align: center;
    max-width: 400px;
    padding: 0 5%;
    color: ${colors.neutral400};
    font-size: ${typograph.bodySmall.fontSize};
    font-weight: ${typograph.bodySmall.fontWeight.bold};
    line-height: ${typograph.bodySmall.lineHeight};

    @media (min-width: 768px) {
        max-width: 500px;
        font-size: ${typograph.bodyLarge.fontSize};
        font-weight: ${typograph.bodyLarge.fontWeight.normal};
        line-height: ${typograph.bodyLarge.lineHeight};
    }
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
        row-gap: 10px;
    }
`

export const Author = styled.h5`
    font-family: 'Fraunces';
    color: ${colors.neutral600};
    font-size: ${typograph.bodySmall.fontSize};
    font-weight: ${typograph.bodySmall.fontWeight.bolder};
    line-height: ${typograph.bodySmall.lineHeight};

    @media (min-width: 768px) {
        font-size: ${typograph.bodyLarge.fontSize};
        font-weight: ${typograph.bodyLarge.fontWeight.bolder};
        line-height: ${typograph.bodyLarge.lineHeight};
    }
`

export const Job = styled.h5`
    color: ${colors.neutral200};
    font-size: ${typograph.captionSmall.fontSize};
    font-weight: ${typograph.captionSmall.fontWeight.normal};
    line-height: ${typograph.captionSmall.lineHeight};

    @media (min-width: 768px) {
        font-size: ${typograph.captionLarge.fontSize};
        font-weight: ${typograph.captionLarge.fontWeight.normal};
        line-height: ${typograph.captionLarge.lineHeight};
    }
`