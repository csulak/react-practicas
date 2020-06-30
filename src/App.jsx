import React from 'react';
import Buttons from './components/Buttons';
import Icons from './components/Icons';
import Paragrapgh from './components/Paragrapgh';
import ButtonConStyles from './components/ButtonConStyles';
import ButtonsEditingStyles from './components/ButtonsEditingStyles';
import Navbar from './components/Navbar';
import Listas from './components/Listas';
import Oculto from './components/Oculto';

import { ThemeProvider } from '@material-ui/core';
import theme from "./temaConfig"
import Contenedor from './components/Contenedor';




function App() {
  return (
    <div>

      {/* <Buttons />

      <Icons />

      <Paragrapgh /> 

      <ButtonConStyles />  

      <Navbar />

      <ButtonsEditingStyles />

      <Listas />

      <Oculto /> */}

      <ThemeProvider theme={theme}>

        <Contenedor />

      </ThemeProvider>

    </div>
  );
}

export default App;
