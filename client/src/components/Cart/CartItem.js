import React from 'react'
import styled from 'styled-components'

export default function CartItem ({item,value}){
  const { _id , name , img , price , total , count } = item
  const {increment , decrement , removeItem} = value
  return (
    <CartItemWrapper>
      <div className="row my-2 text-capitalize d-flex align-items-baseline">
        <div className="col-2">
          <img src={img} alt="product" style={{width:"5rem" , height:"5rem"}} className="img-fluid"/>
        </div>
        <div className="col-4">
          {name}
        </div>
        <div className="col-2  text-center cart-header-item">${price}</div>
        <div className="col-2  text-center cart-header-item">
          <div className="d-flex justify-content-center cart-buttons">
            <span className="btn cart-btn" onClick={() => decrement(_id)}>
              -
            </span>
            <span className="qty-box">
              {count}
            </span>
            <span className="btn cart-btn" onClick={() => increment(_id)}>
              +
            </span>
          </div>
        </div>
        <div className="col-1  text-center cart-header-item cart-subtotal">${total}</div>
        <div className="col-1  text-center cart-header-item">
          <div className="cart-remove p-1 px-2" onClick={() => removeItem(_id)}>
            <i className="fas fa-times"></i>
          </div>
        </div>
      </div>
    </CartItemWrapper>
  )
}

const CartItemWrapper = styled.div`

.fa-times{
  font-size:12px;
}

.cart-remove:hover{
  background-color:#fff;
}

.cart-remove{
  display:inline-block;
  cursor:pointer !important;
  background:#f4f4f1;

}

.cart-subtotal{
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  font-size: 16px;
  line-height: 1.2;
  color: #000;
  font-weight:700;
}

.cart-buttons{
  flex-basis: 100%;
}

.qty-box{
    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
    line-height: 1.2;
    color: #000;
    font-weight: 300;
    font-size: 16px
    padding: 9px 20px;
    background-color: #fff;
    outline: none;
    border-radius: 0;
    border: 1px solid #dad9d7;
    text-align: center;
}

.cart-btn:hover{
  background-color:#ccc;
}

.cart-btn{
  display: flex;
  align-items: center;
  -webkit-box-align: center;
  transition: background-color .2s;
  box-sizing: border-box;
  border-top-right-radius: 0!important;
  border-bottom-right-radius: 0!important;
  margin-right: 0;
  padding: 10px;
  text-transform: uppercase;
  background-color: #dad9d7;
  border-radius:0 !important;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  font-size: 16px;
  line-height: 1.2;
  font-weight: 600;
  border: 1px solid #dad9d7;
  color: #000;
  text-align: center;
  text-decoration: none;
}

`
