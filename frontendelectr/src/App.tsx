import React from 'react';

import GlobalStyles from './styles/GlobalStyles';
import Section from './components/Section';
import SideMenu from './components/SideMenu';
import MenuForm from './components/MenuForm';

import data from './data';


function App() {
  return (
    <>
        <Section 
          variant='white'
          title = {data[0].title}
          description = {data[0].description}
        />

      <Section 
        variant='yellow'
        title = {data[1].title}
        description = {data[0].description}
      />
      <Section 
        variant='black'
        title = {data[4].title}
        description = {data[4].description}
      />
      
      <SideMenu>
        <MenuForm />
      </SideMenu>

      <GlobalStyles />
    </>
  );
}

export default App;
