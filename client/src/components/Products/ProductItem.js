import React , {Component} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../../context'

export default class ProductItem extends Component {
  render(){
    const { id , name , price , img , inCart} = this.props.product
    return(
      <ProductWrapper className="col-10 col-sm-7 col-md-5 col-lg-4 pl-3 mb-3 px-0">
        <ProductConsumer>
          {(value) => (
            <div className="card h-100" onClick={() =>  value.handleDetail(id)} >
                <div className="img-container p-1">
                  <Link to="/details">
                    <img src={img} alt="product" className="card-img-top"/>
                  </Link>
                  <button className="cart-btn" disabled={inCart ? true : false} onClick={() => {value.addToCart(id)}}>
                     {inCart?(<p className="text-capitalize mb-0" disabled>in cart</p>):(<i className="fas fa-cart-plus"></i>)}
                   </button>
                </div>
              <div className="card-footer p-1">
                <Link to="/details" className="title-link">
                  <p className="align-self-center mb-0 item-title">{name}</p>
                  <p className="item-price pt-2 m-0">${price}</p>
                </Link>
              </div>
            </div>
          )}

        </ProductConsumer>
      </ProductWrapper>

    )
  }
}

const ProductWrapper = styled.div`

.title-link{
  text-decoration:none;
}

.item-price{
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  font-size: 14px;
  line-height: 1.2;
  color: #000;
  font-weight: 600;
}

.item-title{
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  font-size: 14px;
  line-height: 1.2;
  color: #000;
  font-weight: 600;
}

.card{
  border-color:transparent;
  transition:all 1s linear;
}
.card-footer{
  background:transparent;
  border-top:transparent;
  transition:all 0.5s linear;
}
&:hover{
  .card{
    border:0.04rem solid rgba(0,0,0,0.2);
    box-shadow:2px 2px 5px 0px; rgba(0,0,0,0.2);
    background: rgba(247,247,247);
  }
}
.img-container{
  position:relative;
  overflow:hidden;
}
.card-img-top{
  transition:all 0.5s linear;
}
.card:hover .card-img-top{
  transform:scale(1.1);
}
.cart-btn{
  position:absolute;
  bottom:0;
  right:0;
  padding:0.2rem 0.4rem;
  background:var(--mainDark);
  border:none;
  color:var(--mainWhite);
  font-size:1.4rem;
  border-radius:0.5rem 0 0 0;
  transform: translate(100% , 100%);
  transition:all 0.5s linear;
}
.card:hover .cart-btn{
  transform:translate(0,0);
}
.cart-btn:hover{
  color:var(--mainBlue);
  cursor:pointer;
}
`
