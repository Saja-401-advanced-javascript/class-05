'use strict';

const mongoose = require('mongoose');

const Categories = require('./categories/categories-schema');

const Products = require('./products/products-schema');

const MONGOOSE_URI = 'mongodb://localhost:27017/class05';

mongoose.connect(MONGOOSE_URI, { useNewUrlParser: true });



