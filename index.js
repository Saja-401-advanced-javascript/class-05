'use strict';

const mongoose = require('mongoose');

const Categories = require('./categories/categories-schema');

const Products = require('./products/products-schema');

const MONGOOSE_URI = 'mongodb://localhost:27017/class05';

mongoose.connect(MONGOOSE_URI, { useNewUrlParser: true });

// for testing 
const bag = new Categories({name :'hat'});


bag.save();


const product = new Products({price:10,weight:15,quantity_in_stock:20});


product.save();
