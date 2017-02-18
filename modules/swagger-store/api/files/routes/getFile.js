'use strict';

const internals = {}

module.exports = {
    method: 'GET',
    path: '/api/projects/{projectId}/repository/blobs/{sha}',
    config: {
        handler: {
            proxy: {
                mapUri: function (request, callback) {
                    const headers = {
                        'PRIVATE-TOKEN': process.env.GITLAB_TOKEN
                    }
                    const apiUrlBase = `${process.env.GITLAB_BASE_URL}/projects/${request.params.projectId}/repository/blobs/${request.params.sha}?`
                    const apiUrlParams = `filepath=${request.query.filepath}`
                    const apiUrl = `${apiUrlBase}${apiUrlParams}`
                    callback(null, apiUrl, headers);
                },
                passThrough: true
            }

        }
    }
}


