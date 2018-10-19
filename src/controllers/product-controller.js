'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const repository = require('../repositories/product-repository');

exports.get = async(req, res, next) => {
    try {
        let data = await repository.get();
        res.status(200).send(data);
    } catch(e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisicao'
        });
    }
    
}

/*
exports.get = (req, res, next) => {
        repository
        .get()
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e)
        });
}*/

exports.getBySlug = (req, res, next) => {
        repository
        .getBySlug(req.params.slug)
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e)
        });
}

exports.getById = (req, res, next) => {
        repository.getById(req.params.id)
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e)
        });
}

exports.getByTag = (req, res, next) => {
    Product
        repository.getByTag(req.params.tag)
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e)
        });
}

exports.post = (req, res, next) => {
        repository.create(req.body)
        .then(x => {
            res.status(201).send({ message: 'Produto cadastrado com sucesso!' });
        }).catch(e => {
            res.status(400).send({
                message: '´Problemas ao cadastrar o produto',
                data: e
            })
        });
}

exports.put = (req, res, next) => {
<<<<<<< HEAD
    repository.update(req.params.id, req.body)
    .then(x => {
        res.status(200).send({
            message: 'Produto atualizado com sucesso!'
        });
    }).catch(e => {
        res.status(400).send({
            message: 'Falha ao atualizar o produto',
            data: e
        });
    })
=======
    Product
        .findByIdAndUpdate(req.params.id, {
            $set: {
                title: req.body.title,
                description: req.body.description,
                price: req.body.price,
                slug: req.body.slug
            }
        }).then(x => {
            res.status(200).send({
                message: 'Produto atualizado com sucesso!'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao atualizar produto',
                data: e
            });
        })
    const id = req.params.id;
    res.status(200).send({
        id: id,
        item: req.body
    });
>>>>>>> b691049289c0596c9457cbc54d4a9bdcb18a4898
}

exports.delete = (req, res, next) => {
    repository.delete(req.body.id)
    .then(x => {
        res.status(200).send({
            message: 'Produto removido com sucesso!'
        });
    }).catch(e => {
        res.status(400).send({
            message: 'Falha ao remover o produto',
            data: e
        });
    });
}