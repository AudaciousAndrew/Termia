const mongoose = require('mongoose')
const Schema = mongoose.Schema

let Order = new Schema({
  firstname:{
    type:String
  },
  lastname:{
    type:String
  },
  phone:{
    type:String
  },
  address:{
    type:String
  },
  order:{
    type:String
  }
})

module.exports = mongoose.model('Order' , Order)
