import React , {Component} from 'react'
import styled from 'styled-components';
import ProductItem from './ProductItem'
import FilterBar from './Filter/FilterBar'
import { ProductConsumer } from '../context'
import { Link } from 'react-router-dom'

export default class Products extends Component {
  render(){
    return(
      <ProductsWrapper>
        <div className="cointainer mt-4 products-container">
          <div className="row">
            <FilterBar />
            <div className="col-lg-9 col-md-8 col-sm-7 px-0 product-list">
              <div className="img-container mb-2">
                <img width="100%" height="168px" src="img/testbanner.jpg" alt="fabric"/>
              </div>
              <div className="title-container text-capitalize mb-2">
                  <h1 className="title-text">our products</h1>
                  <p className="title-results">1107 results</p>
              </div>
              <div className="description-container mb-3">
                  Update your wardrobe with our extensive range of men's clothing here at
                  <Link to="/"> termia.md</Link>
                  . Here you'll discover a stylish range of clothing,
                  from hoodies and jumpers to jeans and jackets. Whether you're in need of some basics like t-shirts,
                  or new clothes from our Spring collection, you'll find Read More.
              </div>
              <div className="pagination-container mb-3">
                <div className="pagination-sort text-capitalize">
                  <form action="">
                    <label htmlFor="select-sort" className="pagination-label">
                      sort by
                    </label>
                    <select name="pagination-sort-select" id="select-sort" className="pagination-select ml-1 text-capitalize">
                      <option value="default" select="true">default</option>
                      <option value="priceAscending" >price: low to high</option>
                      <option value="priceDescending" >price: high to low</option>
                      <option value="title" >A-Z</option>
                    </select>
                  </form>
                </div>
                <nav className="pagination-nav">
                  navigation
                </nav>
              </div>
              <div className="row mb-2">
                <ProductConsumer>
                {value => {
                        return value.products.map(item => {
                          return <ProductItem key={item.id} product={item} />
                        })
                    }}
                 </ProductConsumer>
              </div>
              <div className="pagination-container mb-3">
                <div className="pagination-sort text-capitalize">
                  <form action="">
                    <label htmlFor="select-sort" className="pagination-label">
                      sort by
                    </label>
                    <select name="pagination-sort-select" id="select-sort" className="pagination-select ml-1 text-capitalize">
                      <option value="default" select="true">default</option>
                      <option value="priceAscending" >price: low to high</option>
                      <option value="priceDescending" >price: high to low</option>
                      <option value="title" >A-Z</option>
                    </select>
                  </form>
                </div>
                <nav className="pagination-nav">
                  navigation
                </nav>
              </div>
            </div>
          </div>
        </div>
      </ProductsWrapper>
    )
  }
}

const ProductsWrapper = styled.div`

.pagination-sort{
  width:40%;
  display:inline-block;
}

.pagination-label{
  font-size: 12px;
  line-height: 1.2;
  font-weight: 400;
  letter-spacing: normal;
  color: var(--mainDark);
}

.pagination-nav{
  display:block;
  width:60%;
  float:right;
  text-align:right;
  margin:0;
  padding-bottom:0;
  padding-right:0;
}

.pagination-select{
  border: 1px solid #cecece;
  border-radius: 0;
  padding: 10px;
  min-height: 30px;
  outline: none;
  vertical-align: middle;
  padding-left: 10px;
  background-image: url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 23 15"><path fill="%23000000" fill-rule="evenodd" d="M3.24 1.312a1.36 1.36 0 0 0-1.907-.01 1.335 1.335 0 0 0-.021 1.886l9.328 9.416a1.33 1.33 0 0 0 1.883.012l9.414-9.333a1.332 1.332 0 0 0 .011-1.887 1.282 1.282 0 0 0-1.843-.012l-8.472 8.283L3.24 1.312z"/></svg>');
  background-position: right 10px center;
  background-repeat: no-repeat;
  background-color: #fff;
  -webkit-appearance: none;
  width: 60%;
}

.products-container{
  padding: 0 5rem !important;
}

.title-results{
  display:inline;
  float:right;
  text-align:right;
  font-family:Arial,sans-serif;
  font-size: 22px;
  line-height:1.5;
  margin-top:0;
  margin-bottom:0;
  font-weight: 600;
}

.title-text{
  display:inline;
  font-size: 18px;
  line-height:1.5;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  font-weight: 600;
  text-aling:left;
  padding:0;
  margin-top:0;
  margin-bottom:0;
}

.title-container {
  color: var(--mainDark);
}

.description-container{
  color: var(--mainDark);
  line-height: 1.2;
  font-weight: 300;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
}

`
