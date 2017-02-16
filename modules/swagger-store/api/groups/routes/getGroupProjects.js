'use strict';
const Boom = require('boom')
const Wreck = require('wreck')

const internals = {}

module.exports = {
    method: 'GET',
    path: '/api/groups/{groupId}/projects',
    config: {
        handler: {
            proxy: {
                mapUri: function (request, callback) {
                    const headers = {
                        'PRIVATE-TOKEN': process.env.GITLAB_TOKEN
                    }
                    const apiUrl = `${process.env.GITLAB_API_URL}/groups/${request.params.groupId}/projects`
                    callback(null, apiUrl, headers);
                },
                passThrough: true
            }

        }
    }
}


