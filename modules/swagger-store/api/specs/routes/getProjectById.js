'use strict';
const Boom = require('boom')

// Connection
const gitlab = require('gitlab')({
    url: 'http://gitlab',
    token: '4wY5-Px96FzwEYgsimLn'
})


module.exports = {
    method: 'GET',
    path: '/api/projects/{projectId}',
    config: {
        handler: (request, reply) => {

            gitlab.projects.show(request.params.projectId, function (project) {
                reply(project)
            })

        }
    }
}