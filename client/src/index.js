import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {BrowserRouter as Router} from 'react-router-dom'
import { ProductProvider } from './context'
import ScrollToTop from './ScrollToTop';

ReactDOM.render(
  <ProductProvider>
    <Router>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </Router>
  </ProductProvider>
  , document.getElementById('root'));
