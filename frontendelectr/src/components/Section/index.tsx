import React from 'react';
import Logo  from '../../assets/logo.png';
import fotoMain from '../../assets/fotomain.png';

import { Container, HeaderWrapper, Header, Content, Bars, TextTopMenu, ImgTopMenu, SimulatorButton } from './styles';

const Section: React.FC = () => {
  
  function handleToggle() {
      if(window.toggleActiveMenu) {
          window.toggleActiveMenu();
      }
  }

  return (
      <Container>

        <HeaderWrapper>
            <Header>
                <a href="#">Início</a>
                <a href="#">Electr+</a>
                <h1><img src={Logo} alt="logo"/></h1>
                <a href="#">Quem somos?</a>
                <a href="#">Contato</a>

                <button onClick={handleToggle}><Bars /></button>
            </Header>
        </HeaderWrapper>

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