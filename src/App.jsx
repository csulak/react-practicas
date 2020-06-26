import React from 'react';
import Navbar from './components/Navbar';
import Principal from './components/Principal';

import ThemeProvider from "./context/ThemeProvider"
import HolaProvider from "./context/HolaProvider"

function App() {
  return (
    <div className="App">

      <HolaProvider>
      <ThemeProvider>

        <Navbar />
        <Principal />

      </ThemeProvider>
      </HolaProvider>

    </div>
  );
}

export default App;
