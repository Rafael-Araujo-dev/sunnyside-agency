import styled, { keyframes } from "styled-components";

export const FadeInDown = (y: string) => keyframes`
    from {
        transform: translateY(${y});
        opacity: 0;
    }
    to {
        transform: translateY(0px);
        opacity: 1;
    }
`

export const FadeIn = () => keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

export const BouncingUpAndDown = (startPos: string, endPos: string) => keyframes`
    from { 
        transform: translateY(${startPos});
    }
    to { 
        transform: translateY(${endPos});
    }
`