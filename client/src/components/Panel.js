import React , {Component} from 'react'
import axios from 'axios'
import { ProductConsumer } from '../context'

export default class Panel extends Component {
  state = {
    dname: "",
    name: "",
    price: 0,
    type:"",
    img:"",
    description:"",
    count:0,
    total:0,
    inCart:false,
    available:false
  }

  handleChange = (event) => {
    const { name , value } = event.target
    this.setState({
      [name] : value
    })
  }

  addItem = (event) => {
    event.preventDefault()
    const product = {...this.state}
    console.log(product)
    axios.post('http://localhost:4000/api/add' , product)
          .then(res => console.log(res.data))
  }


  render(){
    return(
      <ProductConsumer>
        {(value) =>
             (
                      <div style={{height : "95vh"}}>
                      <h1>delete item</h1>
                      <form action="">
                        <div>
                        name: <input name="dname" type="text" onChange={this.handleChange}/>
                        </div>
                        <button onClick={() => {value.deleteProduct(this.state.dname)}}>delete</button>
                      </form>
                      <h1>add item</h1>
                      <form action="">
                        <div>
                          name: <input type="text" name="name" onChange={this.handleChange}/>
                          {this.state.name}
                        </div>
                        <div>
                          price <input type="text" name="price" onChange={this.handleChange}/>
                        </div>
                        <div>
                          type: <input type="text" name="type" onChange={this.handleChange}/>
                        </div>
                        <div>
                          description: <input type="text" name="description" onChange={this.handleChange}/>
                        </div>
                        <div>
                          image-path: <input type="text" name="img" onChange={this.handleChange}/>
                        </div>
                        <div>
                          count: <input type="text" name="count" onChange={this.handleChange}/>
                        </div>
                        <div>
                          total: <input type="text" name="total" onChange={this.handleChange}/>
                        </div>
                        <div>
                          inCart: <input type="text" name="inCart" onChange={this.handleChange}/>
                        </div>
                        <div>
                          available: <input type="text" name="available" onChange={this.handleChange}/>
                        </div>
                        <button type="submit" onClick={this.addItem}>submit</button>
                      </form>
                      </div>
                      )
                    }
      </ProductConsumer>
    )
  }
}
