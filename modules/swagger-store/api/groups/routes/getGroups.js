'use strict';

const internals = {}

module.exports = {
    method: 'GET',
    path: '/api/groups',
    config: {
        handler: {
            proxy: {
                mapUri: function (request, callback) {
                    const headers = {
                        'PRIVATE-TOKEN': process.env.GITLAB_TOKEN
                    }
                    const apiUrl = `${process.env.GITLAB_BASE_URL}/groups`
                    callback(null, apiUrl, headers);
                },
                passThrough: true
            }

        }
    }
}


