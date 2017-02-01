'use strict';

const glob = require('glob')
const path = require('path')
const config = require('./config')


exports.register = function (server, options, next) {

    // Look through the routes in
    // all the subdirectories of API
    // and create a new route for each
    glob.sync('/api/**/routes/*.js', {
        root: __dirname
    }).forEach(file => {
        const routePath = `./${path.relative(__dirname, file)}`
        ///debug(`Loading route controller ${routePath}`)
        const route = require(routePath)
        server.route(route)
    })

    next();
};

exports.register.attributes = {
    name: 'swagger-store',
    version: '1.0.0'
};