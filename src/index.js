import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {Provider} from "react-redux"
import generateStore from "./redux/store"

const store = generateStore();

ReactDOM.render(
  <React.StrictMode>
    
    {/* //el provider sirve para poder consumir la tienda en cada componente  */}
    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

