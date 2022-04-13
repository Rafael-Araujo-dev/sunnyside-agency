//Dependencies
import styled from "styled-components";
import colors from "@styles/colors.json";
import typograph from "@styles/typograph.json";

export const Container = styled.nav`
    position: fixed;
    background: #3EBFFF;
    width: 100%;
    z-index: 100;
`

export const Wrapper = styled.div`
    max-width: 1440px;
    padding: 20px 5%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img { cursor: pointer; }
`

export const MenuToggler = styled.div`
    @media (min-width: 768px) {
        display: none;
    }
`
export const Desk = styled.div`
    @media (max-width: 767px) {
        display: none;
    }

    a {
        text-decoration: none;
        color: ${colors.white};
        font-size: ${typograph.bodySmall.fontSize};
        font-weight: ${typograph.bodySmall.fontWeight.normal};
        line-height: ${typograph.bodySmall.lineHeight};
        padding: 0.625rem 1.563rem;
        border-radius: 2rem;
        transition: all .2s;
    }
    a.contact {
        font-family: 'Fraunces';
        color: ${colors.neutral500};
        background-color: ${colors.white};
        font-size: ${typograph.bodySmall.fontSize};
        font-weight: ${typograph.bodySmall.fontWeight.bolder};
        line-height: ${typograph.bodySmall.lineHeight};
        text-transform: uppercase;
    }
    a:hover {
        background: ${colors.blue400};
        color: ${colors.white};
    }

`
export const Items = styled.div`
    display: flex;
    @media (max-width: 767px) {    
        flex-direction: column;
        align-items: center;
        row-gap: 30px;
        padding: 40px 5%;
        overflow: auto;
        max-height: 50vh;
    }
    @media (min-width: 768px) {
        flex-direction: row;
        column-gap: 20px;
    }
`

export const MenuMobile = styled.div`
    &.hide {
        display: none;
    }
    &.show {
        animation: fadeInMenu .2s;
        top: 90px;
    }
    transition: all .2s;
    opacity: 1;
    position: fixed;
    background-color: ${colors.neutral100};
    padding: 0 5%;
    width: 80%;
    top: 80px;
    &:before {
        position: absolute;
        content: "";
        top: -29px;
        right: 0;
        width: 0;
        height: 0;
        border-left: 30px solid transparent;
        border-right: 0px solid transparent;
        border-bottom: 30px solid ${colors.neutral100};
    }

    a {
        text-decoration: none;
        color: ${colors.neutral300};
        font-size: ${typograph.bodySmall.fontSize};
        font-weight: ${typograph.bodySmall.fontWeight.normal};
        line-height: ${typograph.bodySmall.lineHeight};
        padding: 0.625rem 1.563rem;
        border-radius: 2rem;
        transition: all .2s;
    }
    a.contact {
        font-family: 'Fraunces';
        color: ${colors.neutral500};
        background-color: ${colors.secondary};
        font-size: ${typograph.bodySmall.fontSize};
        font-weight: ${typograph.bodySmall.fontWeight.bolder};
        line-height: ${typograph.bodySmall.lineHeight};
        text-transform: uppercase;
    }

    @media (min-width: 768px) {
        display: none;
    }

    @keyframes fadeInMenu {
        0% {
            opacity: 0;
            top: 60px;
        }
        5% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`