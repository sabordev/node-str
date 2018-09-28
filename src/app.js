'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//Conecta ao banco
const strConnection = 'mongodb://sabordev:sabordev6@ds117623.mlab.com:17623/nodestr';
mongoose.connect(strConnection,{ useNewUrlParser: true });
mongoose.set('useCreateIndex', true)

//Carrega os Models
const Product = require('./models/product');

//Carrega as Rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/',indexRoute);
app.use('/products',productRoute);

module.exports = app;