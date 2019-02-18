import React , {Component} from 'react'
import { testData } from './testdata'

const ProductContext = React.createContext()

export default class ProductProvider extends Component {

  state = {
    products: testData
  }

  render(){
    return(
      <ProductContext.Provider value ={{...this.state}}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer

export { ProductProvider , ProductConsumer }
