const Path = require('path');
const Hapi = require('hapi');
const Inert = require('inert');
const Blipp = require('blipp');
const mongoose = require('mongoose');
const SwaggerEditor = require('./modules/swagger-editor');
const SwaggerStore = require('./modules/swagger-store');
const H2o2 = require('h2o2');

require('dotenv').config()

const server = new Hapi.Server({
    connections: {
        routes: {
            cors: true,
            files: {
                relativeTo: Path.join(__dirname, 'modules/swagger-editor')
            }
        }
    }
});

server.connection({ port: process.env.API_PORT || 3000 });

server.register([
    Inert,
    Blipp,
    H2o2,
    SwaggerEditor,
    SwaggerStore
], () => { });


server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Environment:', JSON.stringify(process.env, null, 2));

});