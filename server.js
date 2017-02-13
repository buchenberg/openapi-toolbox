const Path = require('path');
const Hapi = require('hapi');
const Inert = require('inert');
const Blipp = require('blipp');
const mongoose = require('mongoose');
const Config = require('./config');
const SwaggerEditor = require('./modules/swagger-editor');
const SwaggerStore = require('./modules/swagger-store');
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

server.connection({ port: 3000 });

server.register([
    Inert,
    Blipp,
    SwaggerEditor,
    SwaggerStore
], () => { });


server.start((err) => {

    if (err) {
        throw err;
    }

    console.log('Server running at:', server.info.uri);

    

});