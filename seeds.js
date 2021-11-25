const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand',{ useNewUrlParser: true, useUnifiedTopology:true
 }).then(() => {
    console.log('Mongo connection open');
}).catch(err => {
    console.log('MONGO CONNECTION ERROR!!!')
    console.log(err);
})

const Products = [
    {
        name: 'Apple',
        price: 1.99,
        category: 'fruit'
    },
    {
        name: 'Watermelon',
        price: 2.99,
        category: 'fruit'
    },
    {
        name: 'Potato',
        price: 3.99,
        category: 'vegetable'
    },
]

Product.insertMany(Products)
.then(res => {
    console.log(res);
})
.catch(e => {
    console.log(e);
})
