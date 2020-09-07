import React from 'react';

import GlobalStyles from './styles/GlobalStyles';
import Section from './components/Section';
import SideMenu from './components/SideMenu';
import MenuForm from './components/MenuForm';

function App() {
  return (
    <>
        <Section />
      
      <SideMenu>
        <MenuForm />
      </SideMenu>

      <GlobalStyles />
    </>
  );
}

export default App;
