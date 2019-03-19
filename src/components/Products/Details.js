import React , {Component} from 'react'
import { ProductConsumer } from '../../context'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default class Details extends Component {
  render(){
    return(
      <ProductConsumer>
        {(value) => {
          const { id , img , name , price , description , available , details , inCart} = value.detailProduct
          console.log(value.detailProduct);
          return (
            <DetailsWrapper>
            <div className="container-fluid padding-container my-4">
              <div className="row">
                <div className="col-5 img-container p-2">
                  <img src={img} alt="product image" className="img-zoom"/>
                  <Link to="/products">
                    <button className="btn variation-btn w-100 mt-2">back to shoping</button>
                  </Link>
                </div>
                <div className="col-7">
                  <div className="product-title mb-3">
                    {name}
                  </div>
                  <div className="product-price mb-3">
                    ${price}
                  </div>
                  <div className="product-variation">
                    <div className="row">
                      <div className="col-2">
                        <div className="quantity-box">
                          <label htmlFor="qtyBox">Qty:</label>
                          <input className="qty-box ml-2 mr-0" type="text" id="qtyBox" placeholder="1" maxLength="2" size="2"/>
                        </div>
                      </div>
                      <div className="col-4 pr-0">
                        <div className="variation-dropdowns mb-2">
                          <div className="select-size mb-1">
                            <label className="variation-label" htmlFor="sizeBox">Size:</label>
                            <select className=" variation-select" name="variation-select-size" id="sizeBox">
                              <option value="0">please select</option>
                              <option value="10">UK 10</option>
                              <option value="12">UK 12</option>
                              <option value="14">UK 14</option>
                            </select>
                          </div>
                          <div className="select-colour mb-1">
                            <label className="variation-label" htmlFor="colourBox">Colour:</label>
                            <select className=" variation-select" name="variation-select-colour" id="colourBox">
                              <option value="default">please select</option>
                              <option value="black">black</option>
                              <option value="green">green</option>
                              <option value="blue">blue</option>
                              <option value="red">red</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="variation-buttons col-6 p-0">
                    <button className="btn variation-btn mr-0 ml-auto d-block"
                            disabled={inCart?true:false} onClick={() => { value.addToCart(id) }}
                    >
                      {inCart?"in cart" : "buy now"}
                    </button>
                  </div>
                  <div className="available-box">
                    <p>Available:{available?"in stock":"absent"}</p>
                  </div>
                  <nav className="desc-tabs">
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <a className="nav-item nav-link active" id="nav-desc-tab" data-toggle="tab" href="#nav-desc" role="tab" aria-controls="nav-desc" aria-selected="true">Description</a>
                      <a className="nav-item nav-link" id="nav-details-tab" data-toggle="tab" href="#nav-details" role="tab" aria-controls="nav-details" aria-selected="false">Product Details</a>
                      <a className="nav-item nav-link" id="nav-return-tab" data-toggle="tab" href="#nav-return" role="tab" aria-controls="nav-return" aria-selected="false">Return</a>
                    </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-desc" role="tabpanel" aria-labelledby="nav-desc-tab">
                      {description}
                    </div>
                    <div className="tab-pane fade" id="nav-details" role="tabpanel" aria-labelledby="nav-details-tab">
                      {details}
                    </div>
                    <div className="tab-pane fade" id="nav-return" role="tabpanel" aria-labelledby="nav-return-tab">

                    </div>
                  </div>
                </div>
              </div>
            </div>
            </DetailsWrapper>
          )
        }}
      </ProductConsumer>
    )
  }
}

const DetailsWrapper = styled.div`

.tab-content{
  overflow:auto;
  max-height:400px;
}

.nav-link{
  color:#000;
}

.variation-btn{
  text-transform:capitalize;
  background-color:#000;
  color:#fff;
  border-radius:0;
  font-size: 16px;
  line-height:1.5;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  font-weight: 600;
}

.variation-dropdowns{
  float:right;
}

.variation-label{
  width:60px;
}

.variation-select{
  text-transform:capitalize;
  color: #222;
  border: 1px solid #dad9d7;
  padding:5px;
}

.quantity-box{
  float:left;
}

.qty-box{
  padding:10px;
  margin-right:30px;
  width:46px;
  text-align:center;
}

.product-price{
  font-family: Arial,sans-serif;
  font-size: 22px;
  line-height: 1.2;
  color: #000;
  font-weight: 600;
  margin: 0;
}

.product-title{
  font-family: Arial,sans-serif;
  font-size: 22px;
  line-height: 1.2;
  color: #000;
  font-weight: 600;
}

.img-container{
  display:inline-block;
}

.img-zoom{
  width:100%;
  zoom:1.5;
}

.padding-container{
  padding: 0 5rem !important;
}

`
