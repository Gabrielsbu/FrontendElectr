import React from 'react';

import imgBody from '../../assets/fotomain.png';

import { Container, Content, BodyText, ImgBody } from './styles';

const Body: React.FC = () => {
  return (
      <Container>
        <Content>

            <BodyText>

                <h2>Saiba mais sobre sua CONTA DE ENERGIA</h2>
                <span>  O uso consciente de energias não sustentávies pode gerar alem da perda monetária, um grande impacto mundial, esteja consciente de sua utilização e ajude a preservar o mundo.
                </span>

                <h3>Electr+</h3>
                <span>  O Electr+ é um aplicativo cujo intuito 
                        principal é a conscientização e aprendizagem de maneira dinâmica e divertida sobre os consumo de energia elétrica
                </span>
                
            </BodyText>

            

            <ImgBody>
                <img src={imgBody} alt="foto-body"/>
            </ImgBody>

        </Content>
      </Container>
  );
}

export default Body;