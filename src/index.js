import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

import UsuarioProvider from "./context/UsuarioProvider"
import LibrosProvider from "./context/LibrosProvider"

// el app tiene que quedar envuelto por todos los provider que nosotros creemos
ReactDOM.render(
  <React.StrictMode>
    <UsuarioProvider>
      <LibrosProvider>
        <App />
      </LibrosProvider>
    </UsuarioProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
