import React , {Component} from 'react'
import styled from 'styled-components'
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart'
import CartList from './CartList'
import CartTotal from './CartTotal'
import { ProductConsumer } from '../../context'

export default class Cart extends Component {
  render(){
    return(
      <CartWrapper>
        <ProductConsumer>

          {(value) => {
            const { cart } = value;
            console.log(cart.length);
            if(cart.length > 0){
              return(
                  <div className="cart-container my-4 ">
                  <CartColumns/>
                  <CartList value={value}/>
                  <CartTotal value={value}/>
                  </div>
              )
            } else {
              return (
                <div className="cart-container">
                <EmptyCart />
                </div>
              )
            }
          }}

        </ProductConsumer>
      </CartWrapper>
    )
  }
}

const CartWrapper = styled.div`

.cart-container{
  min-height:95vh;
  padding:0 5rem !important;
}

`
