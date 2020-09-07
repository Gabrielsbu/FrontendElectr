import React from 'react';
import { Link } from 'react-router-dom';

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
                <Link to="/">Início</Link>
                <Link to="electr">Electr+</Link>

                <h1><img src={Logo} alt="logo"/></h1>

                <Link to="faq">Quem somos?</Link>
                <Link to="contato">Contato</Link>

                <button onClick={handleToggle}><Bars /></button>
            </Header>
        </HeaderWrapper>
      </Container>
  );
}

export default HeaderPage;