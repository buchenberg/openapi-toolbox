'use strict';
const Boom = require('boom')

const Spec = require('../model/Spec');


module.exports = {
    method: 'POST',
    path: '/api/spec',
    config: {
        handler: (request, reply) => {
            let spec = new Spec(request.payload);
            spec.save((err, spec) => {
                if (err) {
                    throw Boom.badRequest(err);
                }
                reply(spec._id).code(201)
            });


        }
    }
}