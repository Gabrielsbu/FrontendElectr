import styled, { css } from 'styled-components';

import Button from '../Button';
import { Home, Favorite, Email, Person } from '../../styles/Icons';

export const Container = styled.div`
    background: var(--color-quaternary);
    
`
export const Content = styled.div`
    padding: 30px 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    
`

export const TextFooter = styled.div`
    display: none;

    @media (min-width: 767px) {
        display: unset;
        margin: 15px 50px;
        justify-content: center;
        width: 70%;
        font-size: 25px;
    }
`

export const MenuFooter = styled.div`
    display: flex;
    flex-direction: column;
    
    @media (min-width: 767px) {
        
    }
`
export const MenuItemFooter = styled.div`
    display: flex;
    align-items: center;
    flex-shrink: 0;
    padding: 15px 32px;
    cursor: pointer;
    border-radius: 25px;

    > span {
            display: inline;
            margin-left: 10px;
            font-weight: bold;
         
    }  

    @media (min-width: 550px) {

        &:hover {
            background: var(--color-border);
            opacity: 0.7;
        }

    }   
    
    
`
export const ButtonFooter = styled(Button)`
    background: var(--color-primary);
    margin: 15px 30px;
    color: var(--color-quaternary);

    @media (min-width: 767px) {
        width: 60%;
    }
`

const cssIcons = css`
    flex-shrink: 0;
    width: 35px;
    height: 35px;
    color: var(--color-primary);
    display: flex;
`
export const HomeIcon = styled(Home)`
    ${cssIcons}
    
`
export const FavoriteIcon = styled(Favorite)`
    ${cssIcons}
    
`
export const EmailIcon = styled(Email)`
    ${cssIcons}
    
`
export const PersonIcon = styled(Person)`
    ${cssIcons}
    
`
