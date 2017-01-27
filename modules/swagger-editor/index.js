'use strict';

exports.register = function (server, options, next) {
            server.route({
            method: 'GET',
            path: '/editor/{param*}',
            handler: {
                directory: {
                    path: '.',
                    redirectToSlash: true,
                    index: true
                }
            }
        });

        next();
};

exports.register.attributes = {
    name: 'swagger-editor-hapi',
    version: '1.0.0'
};