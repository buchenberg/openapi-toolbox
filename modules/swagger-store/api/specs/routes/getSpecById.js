'use strict';
const Boom = require('boom')

const Spec = require('../model/Spec');


module.exports = {
    method: 'GET',
    path: '/api/spec/{specId}',
    config: {
        handler: (request, reply) => {
            Spec.findOne({ "_id": request.params.specId },  // Only return an object with the "name" and "owner" fields. "_id" is included by default, so you'll need to remove it if you don't want it.
                function (err, spec) {
                    if (err) {
                        reply(err)
                    }
                    if (spec) {  // Search could come back empty, so we should protect against sending nothing back
                        reply(spec.body)
                    } else {  // In case no Spec was found with the given query
                        reply("No Spec found")
                    }
                }
            );
        }
    }
}