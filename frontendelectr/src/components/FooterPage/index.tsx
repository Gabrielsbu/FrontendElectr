import React from 'react';

import {    Container,
            MenuFooter, 
            MenuItemFooter,
            ButtonFooter, 
            HomeIcon, 
            FavoriteIcon, 
            EmailIcon, 
            PersonIcon, 
            TextFooter, 
            Content } from './styles';

const FooterPage: React.FC = () => {
  return (
      <Container>
          <Content>

            <TextFooter>
                <p> Surgimos da necessidade da criação de uma Ferramente Educional focada na física aplicada, com o intúito de auxiliar e ensinar noções básicas da física no Cotidiano. </p>
            </TextFooter>

            <MenuFooter>
                <MenuItemFooter>
                    <HomeIcon />
                    <span>Início</span>
                </MenuItemFooter> 

                <MenuItemFooter>
                    <FavoriteIcon />
                    <span>Electr+</span>
                </MenuItemFooter>
            
                <MenuItemFooter>
                    <PersonIcon />
                    <span>Quem somos?</span>
                </MenuItemFooter> 

                <MenuItemFooter>
                    <EmailIcon />
                    <span>Contato</span>
                </MenuItemFooter> 

                <ButtonFooter >Começar simulação</ButtonFooter>

            </MenuFooter>

          </Content>
      </Container>
  );
}

export default FooterPage;