//Dependencies
import styled from "styled-components";
import colors from "@styles/colors.json";
import typograph from "@styles/typograph.json";

export const Container = styled.footer`
    background-color: ${colors.cyan500};
    text-align: center;
`

export const Wrapper = styled.div`
    max-width: 1440px;
    padding: 100px 5%;
    margin: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 40px;

    img { cursor: pointer; }
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

export const Credits = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 0.5rem;
    background-color: ${colors.cyan700};
    color: ${colors.white};
    padding: 1rem 5%;
    font-size: ${typograph.captionSmall.fontSize};
    font-weight: ${typograph.captionSmall.fontWeight.normal};
    line-height: ${typograph.captionSmall.lineHeight};

    span {
        color: red;
        font-size: 2rem;
        animation: heartsAnim 1.2s ease-in-out infinite alternate;
    }

    @keyframes heartsAnim {
        from {
            transform: scale(1);
        }
        to {
            transform: scale(1.2);
        }
    }
    
    a {
        color: ${colors.white};
        text-decoration: none;
        transition: all .2s;
    }

    a:hover {
        color: rgba(255,255,255,0.75);
        text-decoration: underline;
    }
    
`