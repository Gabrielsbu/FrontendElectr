import React from 'react';

import imgBody from '../../assets/fotomain.png';
import fotoMain from '../../assets/fotomain.png';

import { Container, ContainerTop, ContentMid, BodyText, ImgBody, ContentTop, TextTopMenu, ImgTopMenu, SimulatorButton } from './styles';

const Body: React.FC = () => {

  function handleToggle() {
    if(window.toggleActiveMenu) {
        window.toggleActiveMenu();
    }
  }

  return (

    <Container>

        <ContainerTop>
          <ContentTop>
                <TextTopMenu>
                    <h2> Aprender nunca foi tão fácil, aprenda a economizar seu dinheiro </h2>
                    <p> Tenho certeza que em algum momento você já parou e pensou "Porque a conta de energia veio tão alta?". Já se perguntou bastante sem encontrar uma solução fácil de como calculá-la você mesmo? Então vem dá uma conferida no Electr+, faça já sua simulação </p>
                    <img src={fotoMain} alt="img-top-menu"/>
                    <SimulatorButton onClick={handleToggle} outlined>Começar simulação</SimulatorButton>
                    
                </TextTopMenu>

                <ImgTopMenu>
                    <img src={fotoMain} alt="img-top-menu"/>
                </ImgTopMenu>
                
          </ContentTop>  
        </ContainerTop>

        <ContentMid>
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

        </ContentMid>

      </Container>
  );
}

export default Body;