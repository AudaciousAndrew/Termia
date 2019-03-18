import React from 'react'
import { Link , NavLink } from 'react-router-dom'
import styled from 'styled-components'


export default function Navbar (){

 return (
   <NavbarWrapper id="pageStart">
      <nav className="navbar navbar-expand-sm navbar-dark fixed-top">
        <Link to="/" className="navbar-brand text-capitalize p-0 h-100">
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
            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show"><NavLink to="/delivery" className="nav-link link" activeClassName="link-active">delivery</NavLink></li>
          </ul>
        </div>
        <div className="search-container">
          <i className="fas fa-search search-icon" aria-hidden="true" onClick={() => {
            console.log("HI add search functionality");
          }}></i>
          <input className="search-box ml-1 mr-2 px-1" type="search" placeholder="Search products" aria-label="Search"/>
        </div>
        <div className="cart-container">
        <NavLink to="/cart" className="cart ml-auto" activeClassName="cart-active">
          <i className="fas fa-shopping-cart">(0)</i>
        </NavLink>
        </div>
      </nav>
    </NavbarWrapper>
  )
}

const NavbarWrapper = styled.div`

.navbar {
 padding-left: 5rem !important;
 padding-right: 5rem !important;
 padding-bottom: 0 !important;
 padding-top: 0 !important;
 min-height: 50px;
 background: var(--mainDark);
 font-size: 1.2rem;
}

.navbar-brand {
 padding: 0 15px;
 height: 50px;
 line-height: 50px;
 color: var(--lightBlue) !important;
 font-family: 'PT Serif', serif;
}

.navbar-toggle {
 /* (80px - button height 34px) / 2 = 23px */
 margin-top: 8px;
 padding: 9px 10px !important;
}

.link:hover{
  color: var(--lightBlue) !important;
}

.cart{
  font-size: 1.3rem;
  color: var(--mainWhite) !important;
}

.cart-active{
  color: var(--lightBlue) !important;
}

.search-icon{
  color: var(--mainWhite);
  font-size: 1.1rem;
  cursor: pointer;
}

.search-box{
  font-size: 1.1rem;
  background-color: transparent;
  border: 0;
  border-radius: 4%;
  color: var(--mainWhite);
  outline: none;
  width: 65%;
}

.search-box:focus{
  background-color: #373940;
}

.search-box::-webkit-search-cancel-button{
  cursor: pointer;
}

`
