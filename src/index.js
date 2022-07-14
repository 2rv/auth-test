import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Normalize } from 'styled-normalize'
import { Provider} from 'react-redux';
import store from './store/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={store}>
    <React.StrictMode>
      <Normalize/>
      <App />
    </React.StrictMode>
  </Provider>
);


