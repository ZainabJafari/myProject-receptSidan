const express = require('express');
const app = express();
const cors = require('cors');


app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())


app.use('/api/product', require('./Controllers/productControl'))
app.use('/api/user', require('./Controllers/userControl'))
app.use('/api/order', require('./Controllers/orderControl'))

module.exports = app;