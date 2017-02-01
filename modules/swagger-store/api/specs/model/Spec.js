'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const specModel = new Schema({
    'body': {}
}, { collection: 'specs' });

module.exports = mongoose.model('Spec', specModel);