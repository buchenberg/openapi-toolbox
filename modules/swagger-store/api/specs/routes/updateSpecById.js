'use strict';
const Boom = require('boom')

const Spec = require('../model/Spec');


module.exports = {
    method: 'PUT',
    path: '/api/spec/{specId}',
    config: {
        handler: (request, reply) => {

            Spec.findOneAndUpdate({ _id: request.params.specId },
                request.payload, function (error, data) {
                    if (error) {
                        reply({ statusCode: 503, message: 'Failed to get data', data: error });
                    } else { 
                        reply({ statusCode: 200, message: 'Spec Updated Successfully', data: data }); }
                });

        }
    }
}