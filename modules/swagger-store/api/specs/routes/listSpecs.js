'use strict';
const Boom = require('boom')

const Spec = require('../model/Spec');


module.exports = {
    method: 'GET',
    path: '/api/spec',
    config: {
        handler: (request, reply) => {
            Spec.find()
                .exec((err, specs) => {
                    if (err) {
                        throw Boom.badRequest(err);
                    }
                    if (!specs.length) {
                        throw Boom.notFound('No specs found!');
                    }
                    reply(specs);
                })


        }
    }
}