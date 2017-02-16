'use strict';

const internals = {}

module.exports = {
    method: 'GET',
    path: '/api/projects/{projectId}/files',
    config: {
        handler: {
            proxy: {
                mapUri: function (request, callback) {
                    const headers = {
                        'PRIVATE-TOKEN': process.env.GITLAB_TOKEN
                    }
                    const apiUrlBase = `${process.env.GITLAB_API_URL}/projects/${request.params.projectId}/repository/files?`
                    const apiUrlParams = `file_path=${request.query.filepath}&ref=${request.query.ref}`
                    const apiUrl = `${apiUrlBase}${apiUrlParams}`
                    callback(null, apiUrl, headers);
                },
                passThrough: true
            }

        }
    }
}


