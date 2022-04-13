import styled from "styled-components";
import colors from "@styles/colors.json";
import typograph from "@styles/typograph.json";


export const Container = styled.section`
    padding: 180px 5% 35% 5%;
    background-image: url("./components/HeroMain/image-header-mobile.jpg");
    background-position: center bottom;
    background-size: cover;

    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 60px;

    @media (min-width: 768px) {
        background-image: url("./components/HeroMain/image-header-desk.jpg");
        min-height: calc(100vh - 250px);
        padding: 0 5% 250px 5%;
        padding-top: 40px;
        justify-content: center;
    }    
`

export const Title = styled.h1`
    font-family: 'Fraunces';
    text-align: center;
    color: ${colors.white};
    font-size: ${typograph.DisplaySmall.fontSize};
    line-height: ${typograph.DisplaySmall.lineHeight};
    letter-spacing: 0.4rem;
    font-weight: ${typograph.DisplaySmall.fontWeight.bold};
    text-transform: uppercase;
    max-width: 400px;

    @media (min-width: 768px) {
        max-width: 100%;
        font-size: ${typograph.DisplayLarge.fontSize};
        line-height: ${typograph.DisplayLarge.lineHeight};
    }
`

export const ArrowDown = styled.span`
    cursor: pointer;
    animation: arrowDownHeroAnim 2s ease infinite alternate;
    transition: all .5s;

    @keyframes arrowDownHeroAnim {
        from { 
            transform: translateY(-10px);
        }
        to { 
            transform: translateY(20px);
        }
    }
    
`