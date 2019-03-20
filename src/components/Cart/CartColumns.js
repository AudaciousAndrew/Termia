import React from 'react'
import styled from 'styled-components'

export default function CartColumns (){
 return (
   <CartColumnsWrapper>
     <div className="container-fluid my-4">
       <div className="cart-title text-capitalize mb-4">
         your shoping basket
       </div>
       <div className="row py-2 cart-header text-capitalize ">
         <div className="col-6 cart-header-item">
           items
         </div>
         <div className="col-2  text-center cart-header-item">price</div>
         <div className="col-2  text-center cart-header-item">qty</div>
         <div className="col-1  text-center cart-header-item">subtotal</div>
         <div className="col-1  text-center cart-header-item"></div>
       </div>
     </div>
   </CartColumnsWrapper>
  )
}

const CartColumnsWrapper = styled.div`

.cart-header-item{
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  font-size: 16px;
  line-height: 1.2;
  color: #000;
  font-weight: 600;
}

.cart-header{
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}

.cart-title{
  font-family: Arial,sans-serif;
  font-size: 22px;
  line-height: 1.2;
  color: #000;
  font-weight: 600;
}

`
