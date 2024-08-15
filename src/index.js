
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AppControle from './Controle3/AppControle.jsx';
import StoreVoiture from './Controle3/Store.jsx';

ReactDOM.render(
  <Provider store={StoreVoiture}>
  <AppControle />
 </Provider>, 
  document.getElementById('root')
);
