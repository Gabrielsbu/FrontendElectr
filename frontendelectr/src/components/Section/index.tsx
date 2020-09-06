import React from 'react';
import Logo  from '../../assets/logo.png'

import { Container, HeaderWrapper, Header, Content, Bars } from './styles';

interface Props {
    variant: 'yellow' | 'white' | 'black';
    title: string;
    description: string;
}

const Section: React.FC<Props> = ({ variant, title, description }) => {
  
  function handleToggle() {
      if(window.toggleActiveMenu) {
          window.toggleActiveMenu();
      }
  }

  return (
      <Container className={variant}>

        <HeaderWrapper>
            <Header>
                <h1>
                    <img src={Logo} alt=""/>
                    <span>Electr+</span>
                </h1>

                <button onClick={handleToggle}><Bars /></button>
            </Header>
        </HeaderWrapper>

          <Content>
            <h2> {title} </h2>
            <p> {description} </p>
          </Content>
      </Container>
  );
}

export default Section;