import styled from 'styled-components';

import { FaBars } from 'react-icons/fa';

export const Container = styled.div`
    --padding-top: 100px;
    --padding-bottom:120px;
    --heading-font-size: 32px;
    --content-width: 100%;

    background: var(--color-primary);
    position: relative;
    
`;  

export const HeaderWrapper = styled.div `
    position: absolute;
    top:0;
    left: 0;
    bottom:0;
    right: 0;
`
export const Header = styled.header `

    z-index: 3;
    background: var(--color-secondary);
    display: flex;
    justify-content: space-between;

    margin: 0 auto;
    padding: 35px 32px;

    > h1 {
        
        > span {
            color: var(--text-color);
            margin-left: 10px;
            font-size: 45px;
            display: none;
            
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

   
    top: 0;
    right: 0;
    left: 0;
    position: fixed;
    
    @media (min-width: 720px) {
        > h1{
            > span {
                display: unset;
            }
        }
    }
`

export const Bars = styled(FaBars)`
    width:36px;
    height: 32px;
`
export const Content = styled.div`
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;

    > h2 {
        margin-top: 5rem;
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

    > button {
        margin-top: 70px;
        padding: 13px 18px;
        font-size: 16px;
        background-color: var(--color-secondary);
        color: var(--color-primary);
        border: none;
        border-radius: 25px;

        cursor: pointer;
        &:hover{
            opacity: 0.87;
        }
    } 

    @media (min-width: 768px) {
        > h2, p {
            width: 55%;
        }

        > button {
            max-width: 250px;
        }
    }

    padding: var(--padding-top) 32px var(--padding-bottom);
`;