'use strict';
const Boom = require('boom')
const Wreck = require('wreck')

const wreck = Wreck.defaults({
    headers: { 'PRIVATE-TOKEN': process.env.GITLAB_TOKEN }
})



module.exports = {
    method: 'GET',
    path: '/api/projects/{projectId}/filetree',
    config: {
        handler: (request, reply) => {

            const apiUrl = `${process.env.GITLAB_API_URL}\
/projects/${request.params.projectId}\
/repository/tree`

            wreck.get(apiUrl, (err, res, payload) => {
                reply(JSON.parse(payload))
            });

        }
    }
}