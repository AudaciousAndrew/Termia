import React, { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Switch , Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Footer from './components/Footer'
import Cart from './components/Cart'
import About from './components/About/About';
import MainPage from './components/MainPage';
import Delivery from './components/Delivery';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/products" component={Products} />
          <Route path="/about" component={About} />
          <Route path="/cart" component={Cart} />
          <Route path="/delivery" component={Delivery} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
