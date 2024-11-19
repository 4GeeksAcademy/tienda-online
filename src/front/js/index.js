import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import '../styles/index.css';
import { BrowserRouter} from 'react-router-dom';
import ShopContextProvider from './store/ShopContext.js'

ReactDOM.createRoot(document.getElementById('app')).render(
  <BrowserRouter>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </BrowserRouter>,
);