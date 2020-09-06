import styled from 'styled-components';

import { FaBars } from 'react-icons/fa';

export const Container = styled.div`
    --padding-top: 100px;
    --padding-bottom:120px;
    --heading-font-size: 32px;
    --content-width: 100%;

    &.white {
        
        --bg-color: var(--color-primary);
        --text-color: var(--color-tertiary);
        --logo-color: var(--color-secondary);
    } 

    &.yellow{
        --bg-color: var(--color-secondary);
        --text-color: var(--color-quaternary);
        --logo-color: var(--color-blue);
    }
    
    &.black{
        --bg-color: var(--color-quaternary);
        --text-color: var(--color-primary);
        --logo-color: var(--color-blue);
    }

    &:first-child {
        --padding-top: 130px;
        --heading-font-size:51px;

        @media (min-width: 1024px) {
            --content-width: 50%;
            --heading-font-size:71px;
        }
    }

    background: var(--bg-color);
    position: relative;
`;  

export const HeaderWrapper = styled.div `
    position: absolute;
    top:0;
    left: 0;
    bottom:0;
    right: 0;
    clip: rect(auto, auto, auto, auto);
`
export const Header = styled.header `

    z-index: 3;
    background: var(--bg-color);

    display: flex;
    justify-content: space-between;

    max-width: 1440px;
    margin: 0 auto;
    padding: 16px 32px;

    > h1 {
        
        > span {
            color: var(--text-color);
            margin-left: 10px;
            font-size: 45px;
            
        }
    }
    > button {
        color: var(--text-color);
        background: none;
        border: none;
        outline: none;
        font-size: 16px;
        cursor: pointer;

        &:hover, &:focus {
            text-decoration: underline;
        }
    }

    position: fixed;
    top: 0;
    right: 0;
    left: 0;
`

export const Bars = styled(FaBars)`
    width:36px;
    height: 32px;
`
export const Content = styled.div`
    z-index: 2;
    position: relative;
    max-width: 1440px;
    margin: 0 auto;

    > h2 {
        font-size: var(--heading-font-size);
        color: var(--logo-color);
        max-width: var(--content-width);
        font-size: 45px;
    }

    > p {
        margin-top: 20px;
        font-size: 18px;
        color: var(--text-secondary);
        max-width: var(--content-width);
    } 

    @media (min-width: 1024px) {
        > h2, p {
            width: 50%;
        }

     
    }

    padding: var(--padding-top) 32px var(--padding-bottom);
`;