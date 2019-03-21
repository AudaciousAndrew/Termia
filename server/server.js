const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = 4000
const appRoutes = express.Router()
const mongoose = require('mongoose')
const nodemailer = require('nodemailer')

let Product = require('./models/Product')
let Order = require('./models/Order')

app.use(cors())
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/products-db' , { useNewUrlParser:true})
const connection = mongoose.connection

connection.once('open' , function(){
  console.log("mongodb database connection established successfully")
})

appRoutes.route('/products').get(function(req , res){
  Product.find(function(err,products){
    if(err){
      console.log(err);
    } else {
      res.json(products)
    }
  })
})

appRoutes.route('/add').post(function(req , res) {
  let product = new Product(req.body)
  product.save()
          .then(product => {
            res.status(200).json({'product' : 'product added'})
          })
          .catch(err => {
            res.status(400).send('adding new product failed')
          })

})

appRoutes.route('/order').post(function(req , res){
  let order = new Order(req.body)
  order.save()
        .then(order => {
          res.status(200).json({'order': 'order added'})
        })
        .catch(err => {
          res.status(400).send('adding new order failed')
        })
        nodemailer.createTestAccount((err, account) => {
          const htmlEmail = messageHtml
        })
        let transporter = nodemailer.createTransport({
          host: 'smtp.ethereal.email' ,
          port: 587,
          secure: false,
          auth:{
            user: 'marco.veum66@ethereal.email' ,
            pass: 'QEcw91r1fXRQ9B7ZkZ'
          }
        })
        let messageText ="first name:"+req.body.firstname+"\nlast name:"+req.body.lastname
                      +"\nphone:"+req.body.phone+"\norder:\n"+req.body.order
        let messageHtml = "first name:"+req.body.firstname+"<br/>last name:"+req.body.lastname
                      +"<br/>phone:"+req.body.phone+"<br/>order:<br/>"+req.body.order
        let mailOptions = {
          from: '"Termia Group" <termia@group.com>',
          to: "pukarmika@gmail.com",
          subject: "New Order",
          text:messageText,
          html:messageHtml
        }

        transporter.sendMail(mailOptions , (err , info) => {
          if (err) {
            return console.log(err)
          }
          console.log('message sent')
        })
})

appRoutes.route('/getorders').get(function(req,res){
  Order.find(function(err,orders){
    if(err){
      console.log(err);
    } else {
      res.json(orders)
    }
  })
})

appRoutes.route('/delete').post(function(req , res){
  let product = new Product(req.body)
  let id = product._id
  Product.findByIdAndDelete(id , function(err) {
    if(!err){
      res.sendStatus(200)
    } else {
      res.status(500).json({error : err})
    }
  })
})

app.use('/api' , appRoutes)

app.listen(PORT , function() {
  console.log("server is running on port:" + PORT);
})
