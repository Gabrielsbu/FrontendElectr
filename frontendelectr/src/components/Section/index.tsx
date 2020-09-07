import React from 'react';

import fotoMain from '../../assets/fotomain.png';

import { Container, Content, TextTopMenu, ImgTopMenu, SimulatorButton } from './styles';

const Section: React.FC = () => {
  
  function handleToggle() {
      if(window.toggleActiveMenu) {
          window.toggleActiveMenu();
      }
  }

  return (
      <Container>

          <Content>
                <TextTopMenu>
                    <h2> Aprender nunca foi tão fácil, aprenda a economizar seu dinheiro </h2>
                    <p> Tenho certeza que em algum momento você já parou e pensou "Porque a conta de energia veio tão alta?". Já se perguntou bastante sem encontrar uma solução fácil de como calculá-la você mesmo? Então vem dá uma conferida no Electr+, faça já sua simulação </p>
                    <img src={fotoMain} alt="img-top-menu"/>
                    <SimulatorButton onClick={handleToggle} outlined>Começar simulação</SimulatorButton>
                    
                </TextTopMenu>

                <ImgTopMenu>
                    <img src={fotoMain} alt="img-top-menu"/>
                </ImgTopMenu>
                
          </Content>
        
          
      </Container>
  );
}

export default Section;