import styled from 'styled-components';

export const Container = styled.div`
  background: var(--color-border);
  
`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 60px;

    @media (min-width: 767px){
        display: grid;
        
        grid-template-columns: 1fr 1fr;
        
    }

    @media (min-width: 1024px){
       
        height: 100vh;
        
    }
`;
export const BodyText = styled.div`
    display: flex;
    flex-direction: column;
    
    > h2 {
        
        font-size: 30px;
        font-weight: bold;
        color: var(--color-quaternary);
        
    }

    > h3 {
            margin-top: 30px;
            font-size: 30px;
            font-weight: bold;
            color: var(--color-quaternary);
    }

    > span {
        margin-top: 20px;
        font-size: 18px;
        
    }

    @media (min-width: 767px) {
        > h2, span {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            width: 90%;
        }

        > h3 {
            font-size: 30px;
            font-weight: bold;
            color: var(--color-quaternary);
        }

        > h3 {
            margin-top: 50px;
        }

        > span {
            margin-top: 30px;
            
        }

       
    }

`;

export const ImgBody = styled.div`
    > img {
        margin-top: 60px;
        width: 100%;
    }

    @media (min-width: 767px) {
        display: flex;
        justify-content: center;
        > img {
            width: 80%;
        }
    }

`;