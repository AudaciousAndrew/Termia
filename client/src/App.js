import React, { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Switch , Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Products from './components/Products/Products'
import Footer from './components/Footer'
import Cart from './components/Cart/Cart'
import About from './components/About/About'
import MainPage from './components/MainPage'
import Delivery from './components/Delivery'
import Details from './components/Products/Details'
import Default from './components/Default';
import Panel from './components/Panel';

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
          <Route path="/details" component={Details} />
          <Route path="/panel" component={Panel} />
          <Route component={Default} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
