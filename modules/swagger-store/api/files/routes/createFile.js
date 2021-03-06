'use strict';

const Wreck = require('wreck')

const wreck = Wreck.defaults({
    headers: { 'PRIVATE-TOKEN': process.env.GITLAB_TOKEN }
})



module.exports = {
    method: 'POST',
    path: '/api/projects/{projectId}/files',
    config: {
        handler: (request, reply) => {

            if (request.query.filepath && request.query.ref) {
                const apiUrlBase = `${process.env.GITLAB_BASE_URL}/projects/${request.params.projectId}/repository/files?`
                const apiUrlParams = `branch_name=${request.query.branch_name}&file_path=${request.query.filepath}&ref=${request.query.ref}`
                const apiUrl = `${apiUrlBase}${apiUrlParams}`
                wreck.get(apiUrl, (err, res, payload) => {
                    reply(JSON.parse(payload))
                });
            } else {
                reply({error: 'You need to supply both a filepath and a ref parameter'}).code(333)
            }



        }
    }
}