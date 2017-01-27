'use strict';

exports.register = function (server, options, next) {
    server.route({
        method: 'GET',
        path: '/store/{param*}',
        handler: function (request, reply) {
            reply('Hello!');
        }
    });

    next();
};

exports.register.attributes = {
    name: 'swagger-store',
    version: '1.0.0'
};