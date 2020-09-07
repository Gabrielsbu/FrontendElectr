import styled from 'styled-components';

import { FaBars } from 'react-icons/fa';
import Button from '../../components/Button';

export const Container = styled.div`
    --padding-top: 100px;
    --margin-top: 400px;
    --padding-bottom:120px;
    --content-width: 100%;

    background: var(--color-primary);
    position: relative;
    
`;  

export const HeaderWrapper = styled.div `
    position: absolute;
    top:0;
    left: 0;
    right: 0;
`
export const Header = styled.header `

    z-index: 3;
    top: 0;
    right: 0;
    left: 0;
    position: fixed;
    background: var(--color-secondary);
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
`

export const Bars = styled(FaBars)`
    width:36px;
    height: 32px;
`
export const Content = styled.div`
    
    padding-top: 180px;
    
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    
`;

export const TextTopMenu = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

    > h2 {
        font-size: 32px;
        color: var(--color-quaternary);
        width: 80%; 
    }

    > p {
        margin-top: 20px;
        font-size: 18px;
        color: var(--color-secondary);
        width: 80%;
        display:none;
    }

    > img {
        margin-top: 3.8rem;
        width: 65%;
    }  
    
    > button {
        margin-top: 70px;
        padding: 13px 18px;
        font-size: 16px;
        background-color: var(--color-secondary);
        color: var(--color-primary);
        border: none;
        border-radius: 25px;
        width: 80%;
    }
  

    @media (min-width: 768px) {
        
        > p {
            display: unset;
        }
        > h2, p {
            width: 80%;
        }

        > button {
            max-width: 250px;
            margin-top: 30px;
        }

        > img {
            display: none;
        } 
    }
`
export const ImgTopMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    > img {
        display: none;
    }  
    
    @media (min-width: 768px) {
        > img {
            display: unset;
            width: 80%;
            height: auto;
            
        }  
    }

    
`

export const SimulatorButton = styled(Button)`

        margin-top: 25px;
        padding: 13px 18px;
        font-size: 16px;
        background-color: var(--color-quaternary);
        color: var(--color-primary);
        border: none;

        cursor: pointer;
        &:hover{
            opacity: 0.87;
        }
`