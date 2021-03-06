import styled from 'styled-components';

import Button from '../../components/Button';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    background: #fff;
`;

export const Navigation = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    

    padding: 40px 35px;
    min-height: 61px;

    > h1 {
        display: flex;
        align-items: center;

        > span {
            color: var(--color-quaternary);
            margin-left: 10px;
            font-size: 29px;
        }
    }

    > button {
        background: none;
        border: none;
        font-weight: bold;
        font-size: 35px;
        outline: 0;
        cursor: pointer;
        }

    @media (min-width: 1024px) {
        justify-content: space-between;
        
    }

`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;

    padding: 0 32px;
    max-width: 480px;
    margin: 0 auto;

    > .title {
        font-size: 25px;
        font-weight: 500;
        color: var(--color)
    }

    > .subtitle {
        font-size:12px;
        margin-top: 3px;
    }

    > input {
        background: var(--color-primary);
        border: 1px solid var(--color-border);
        padding: 13px 18px;
        font-size: 14px;

        margin-top: 18px;
    }

    > .terms {
        font-size: 12px;
        opacity: 0.6;
        margin-top: 4px;
    }
`;

export const SendButton = styled(Button)`
    
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
