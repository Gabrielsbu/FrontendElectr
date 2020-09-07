import React from 'react';

import GlobalStyles from './styles/GlobalStyles';
import Section from './components/Section';
import SideMenu from './components/SideMenu';
import MenuForm from './components/MenuForm';
import FooterPage from './components/FooterPage';
import HeaderPage from './components/HeaderPage';
import Body from './components/Body';

function App() {
  return (
    <>
      <HeaderPage />

        <Section />

        <Body />

        <SideMenu>
          <MenuForm />
        </SideMenu>

        <FooterPage />

      <GlobalStyles />
    </>
  );
}

export default App;
