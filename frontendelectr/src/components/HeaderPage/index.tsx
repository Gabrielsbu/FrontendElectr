import React from 'react';

import Logo  from '../../assets/logo.png';

import { Container, HeaderWrapper, Header, Bars } from './styles';

const HeaderPage: React.FC = () => {

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
      </Container>
  );
}

export default HeaderPage;