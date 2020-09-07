import React from 'react';

import GlobalStyles from '../../styles/GlobalStyles';
import SideMenu from '../../components/SideMenu';
import MenuForm from '../../components/MenuForm';
import FooterPage from '../../components/FooterPage';
import HeaderPage from '../../components/HeaderPage';
import Body from '../../components/Body';

function Main() {
  return (
    <>
      <HeaderPage />

        <Body />

        <SideMenu>
          <MenuForm />
        </SideMenu>

        <FooterPage />

      <GlobalStyles />
    </>
  );
}

export default Main;
