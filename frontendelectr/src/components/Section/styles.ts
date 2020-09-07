import styled from 'styled-components';


import Button from '../../components/Button';

export const Container = styled.div`
    --padding-top: 100px;
    --margin-top: 400px;
    --padding-bottom:120px;
    --content-width: 100%;

    background: var(--color-primary);
    
`;  


export const Content = styled.div`
    
    padding-top: 180px;
    
    @media (min-width: 767px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        
    }

    @media (min-width: 1024px){
       
       height: 100vh;
       
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

        margin: 50px;
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
