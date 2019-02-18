import React from 'react'
import { Link , NavLink } from 'react-router-dom';


export default function Navbar (){
 return (
    <nav className="navbar navbar-expand-sm navbar-dark p-0 fixed-top">
      <Link to="/" className="navbar-brand text-capitalize ml-5 p-0 h-100">
        <img src="img/logo3.png" alt="logo" height="40px" width="40px"/>
        <span className="ml-3">термия</span>
      </Link>
      <button className="navbar-toggler ml-auto" data-toggle="collapse" data-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse ml-5" id="navbarCollapse">
        <ul className="navbar-nav text-capitalize">
          <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show"><NavLink to="/" exact className="nav-link link" activeClassName="link-active">main</NavLink></li>
          <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show"><NavLink to="/products" className="nav-link link" activeClassName="link-active">products</NavLink></li>
          <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show"><NavLink to="/about" className="nav-link link" activeClassName="link-active">about&nbsp;us</NavLink></li>
        </ul>
      </div>
      <div className="search-container">
        <i className="fas fa-search search-icon" aria-hidden="true" onClick={() => {
          console.log("HI add search functionality");
        }}></i>
        <input className="search-box ml-1 mr-2 px-1" type="search" placeholder="Search products" aria-label="Search"/>
      </div>
      <div className="cart-container">
      <NavLink to="/cart" className="cart ml-auto mr-5" activeClassName="cart-active">
        <i className="fas fa-shopping-cart">(0)</i>
      </NavLink>
      </div>
    </nav>
  )
}
