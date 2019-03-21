const mongoose = require('mongoose')
const Schema = mongoose.Schema

let Product = new Schema({
  img:{
    type: String
  },
  name:{
    type: String
  },
  type:{
    type: String
  },
  price:{
    type: Number
  },
  description:{
    type: String
  },
  inCart:{
    type: Boolean
  },
  available:{
    type: Boolean
  },
  count:{
    type: Number
  },
  total:{
    type: Number
  }

})

module.exports = mongoose.model('Product' , Product)
