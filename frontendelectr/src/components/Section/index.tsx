import React from 'react';
import Logo  from '../../assets/logo.png'

import { Container, HeaderWrapper, Header, Content, Bars } from './styles';

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
                <h1>
                    <img src={Logo} alt="logo"/>
                    <span>Electr+</span>
                </h1>

                <button onClick={handleToggle}><Bars /></button>
            </Header>
        </HeaderWrapper>

          <Content>
            <h2> Aprender nunca foi tão fácil, aprenda a economizar seu dinheiro </h2>
            <p> Tenho certeza que em algum momento você já parou e pensou "Porque a conta de energia veio tão alta?". Já se perguntou bastante sem encontrar uma solução fácil de como calculá-la você mesmo? Então vem dá uma conferida no Electr+, faça já sua simulação </p>
            <button>Começar simulação</button>
          </Content>

          <Content>
            <h2> Aprender nunca foi tão fácil, aprenda a economizar seu dinheiro </h2>
            <p> Tenho certeza que em algum momento você já parou e pensou "Porque a conta de energia veio tão alta?". Já se perguntou bastante sem encontrar uma solução fácil de como calculá-la você mesmo? Então vem dá uma conferida no Electr+, faça já sua simulação </p>
            <button>Começar simulação</button>
          </Content>

          <Content>
            <h2> Aprender nunca foi tão fácil, aprenda a economizar seu dinheiro </h2>
            <p> Tenho certeza que em algum momento você já parou e pensou "Porque a conta de energia veio tão alta?". Já se perguntou bastante sem encontrar uma solução fácil de como calculá-la você mesmo? Então vem dá uma conferida no Electr+, faça já sua simulação </p>
            <button>Começar simulação</button>
          </Content>

          
      </Container>
  );
}

export default Section;