'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    // _id
    title: {
        type: String,
        required: [true,'Nome do Produto deve ser Informado'],
        trim: true
    },
    slug: {
        type: String,
        required: true,
        trim: true,
        index: true,
        unique: true
    },
    description: {
        type: String,
        required: [true,'Descrição do Produto deve ser Informada'],
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    tags: [{
        type: String,
        require: true
    }]
});

module.exports = mongoose.model('Product',schema);