import React , {Component} from 'react'
import Product from './Product'
import FilterBar from './FilterBar'
import { ProductConsumer } from '../context'

export default class Products extends Component {
  render(){
    return(
      <>
        <div className="cointainer-fluid">
          <div className="row mx-auto">
            <FilterBar />
            <div className="col-lg-10 col-md-9 col-sm-8 product-list">
              <div className="row">
                <ProductConsumer>
                {value => {
                        return value.products.map(item => {
                          return <Product key={item.id} product={item} />
                        })
                    }}
                 </ProductConsumer>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
