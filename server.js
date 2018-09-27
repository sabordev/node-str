'use strict'

const http = require('http');
const debug = require('debug')('nodestr:server');
const express = require('express');

if (1 > 2) {
    console.log('1 é maior que 2');
} else {
    console.log('1 não é maior que 2');
}