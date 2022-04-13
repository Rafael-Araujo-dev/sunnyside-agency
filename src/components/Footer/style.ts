//Dependencies
import styled from "styled-components";
import colors from "@styles/colors.json";
import typograph from "@styles/typograph.json";

export const Container = styled.footer`
    padding: 100px 5%;
    background-color: ${colors.cyan500};
    text-align: center;
`

export const Wrapper = styled.div`
    max-width: 1440px;
    width: 100%;
    margin: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 40px;
`

export const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    max-width: 300px;
    column-gap: 10px;
    transition: all .2s;

    a {
        color: ${colors.cyan700};
        text-decoration: none;
        font-size: ${typograph.bodySmall.fontSize};
        font-weight: ${typograph.bodySmall.fontWeight.bold};
        line-height: ${typograph.bodySmall.lineHeight};
        transition: all .2s;
    }
    a:hover {
        color: ${colors.white};
    }

    @media (min-width: 768px) {
        max-width: 400px;
        
        a {
            font-size: ${typograph.bodyLarge.fontSize};
            font-weight: ${typograph.bodyLarge.fontWeight.bold};
            line-height: ${typograph.bodyLarge.lineHeight};
        }
    }
`

export const Socials = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 40px;
    margin-top: 20px;
    @media (min-width: 768px) {
        margin-top: 40px;
    }
    img { 
        transition: all .2s;  
        cursor: pointer;
    }
    img:hover {
        filter: brightness(0) invert(1);
    }
`

export const Social = styled.span`

`