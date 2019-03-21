import React , {Component} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ProductConsumer } from '../../context'

export default class CartTotal extends Component{
  state = {
    firstName:"",
    lastName:"",
    phone:"",
    address:"",
  }
  handleChange = (event) => {
    const { name , value } = event.target
    this.setState({
      [name] : value
    })
  }

  render(){
    return (
       <CartTotalWrapper>
       <ProductConsumer>
       {(value) => {
         return (
           <>
           <div className="row py-2 cart-footer my-4 cart-footer-text text-capitalize">
             <div className="col-2 offset-8 text-center">
               basket subtotal:
             </div>
             <div className="col-1">
               ${value.cartTotal}
             </div>
             <div className="col-1">
               <button type="button" className="order-btn btn text-capitalize" data-toggle="modal" data-target="#exampleModalCenter">
                 order
               </button>
               <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                 <div className="modal-dialog modal-dialog-centered" role="document">
                   <div className="modal-content">
                     <div className="modal-header">
                       <h5 className="modal-title" id="exampleModalLongTitle">Enter contact information</h5>
                       <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                         <span aria-hidden="true">&times;</span>
                       </button>
                     </div>
                     <div className="modal-body">
                       <div>
                         First Name: <br/>
                         <input type="text" onChange={this.handleChange} name="firstName"/>
                       </div>
                       <div>
                         Last Name: <br/>
                         <input type="text" onChange={this.handleChange} name="lastName"/>
                       </div>
                       <div>
                         Phone Number: <br/>
                         <input type="text" onChange={this.handleChange} name="phone"/>
                       </div>
                       <div>
                         Address: <br/>
                         <input type="text" onChange={this.handleChange} name="address"/>
                       </div>
                     </div>
                     <div className="modal-footer">
                       <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                       <button type="button" className="btn btn-primary"
                        onClick={() => value.confirmOrder({...this.state})
                        }>
                        Confirm Order
                       </button>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
           <div className="row">
             <div className="col-3">
               <Link to="/products">
                 <button className="btn bck-button p-2">continue shopping</button>
               </Link>
             </div>
           </div>
         </>
         )
       }}
      </ProductConsumer>
      </CartTotalWrapper>
    )
  }
}

const CartTotalWrapper = styled.div`

.order-btn:hover{
  background-color:#222;
}

.order-btn{
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  font-size: 15px;
  line-height: 1.2;
  color: #fff;
  font-weight: 600;
  background-color:#000;
  border-radius:0 !important;
}

.cart-footer-text{
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  font-size: 16px;
  line-height: 1.2;
  color: #000;
  font-weight: 600;
}

.btn:focus{
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
