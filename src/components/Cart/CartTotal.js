import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function CartTotal ({value}){
  const { cartTotal } = value
 return (
     <CartTotalWrapper>
      <div className="row py-2 cart-footer my-4 cart-footer-text text-capitalize">
        <div className="col-2 offset-8 text-center">
          basket subtotal:
        </div>
        <div className="col-2">
          ${cartTotal}
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <Link to="/products">
            <button className="btn bck-button p-2">continue shopping</button>
          </Link>
        </div>
      </div>
    </CartTotalWrapper>
  )
}

const CartTotalWrapper = styled.div`

.cart-footer-text{
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  font-size: 16px;
  line-height: 1.2;
  color: #000;
  font-weight: 600;
}

.bck-button:focus{
  outline:none;
  box-shadow:none;
}

.bck-button:hover{
  background-color:#ccc;
}

.bck-button{
  border-radius:0 !important;
  background-color:#dad9d7;
  text-transform:uppercase;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  font-size: 15px;
  line-height: 1.2;
  color: #000;
  font-weight: 600;
}

.cart-footer{
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}

`
