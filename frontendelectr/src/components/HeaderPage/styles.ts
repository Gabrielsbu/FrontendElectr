import styled from 'styled-components';

import { FaBars } from 'react-icons/fa';

export const Container = styled.div`
  position: relative;
`;

export const HeaderWrapper = styled.div `
    position: absolute;
    top:0;
    left: 0;
    right: 0;
`;

export const Header = styled.header `

    z-index: 3;
    top: 0;
    right: 0;
    left: 0;
    position: fixed;
    background: var(--color-border);
    display: flex;
    justify-content: space-between;

    margin: 0 auto;
    padding: 30px 32px;
    > a {
        display: none;
    }
    > h1 {
        
        > span {
            color: var(--text-color);
            margin-left: 30px;
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
        display: unset;
        cursor: pointer;

        &:hover, &:focus {
            text-decoration: underline;
        }
    }

 
    @media (min-width: 769px) {
        display: flex;
        align-items: center;
        padding: 20px 10rem;
        > a {
            display: unset;
            text-decoration: none;
            color: var(--color-quaternary);
            font-weight: bold;
        }
        > button {
            display: none;
        };
    }
`;

export const Bars = styled(FaBars)`
    width:36px;
    height: 32px;
`