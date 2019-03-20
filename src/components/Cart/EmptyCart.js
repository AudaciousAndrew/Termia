import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function EmptyCart (){
 return (
    <EmptyCartWrapper>
      <div className="container-fluid my-4">
        <div className="cart-title text-capitalize pb-2 mb-5 title-border">
          your shoping basket
        </div>
        <div className="text-center mb-3 cart-title">
          There are currently no items in your basket.
        </div>
        <div className="div">
          <Link to="/products" className="cart-link">
            <button className="text-uppercase btn cart-btn mx-auto d-block">continue shopping</button>
          </Link>
        </div>
      </div>
    </EmptyCartWrapper>
  )
}

const EmptyCartWrapper = styled.div`

.cart-btn:hover{
  background-color:#222;
}

.cart-link{
  text-decoration:none;
}

.cart-btn{
  color:#fff;
  background-color:#000;
  font-family: Arial,sans-serif;
  font-size: 22px;
  line-height: 1.2;
  font-weight: 600;
}

.title-border{
  border-bottom:1px solid #ccc;
}

.cart-title{
  font-family: Arial,sans-serif;
  font-size: 22px;
  line-height: 1.2;
  color: #000;
  font-weight: 600;
}

`
