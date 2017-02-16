'use strict';
const Boom = require('boom')
const Wreck = require('wreck')

const wreck = Wreck.defaults({
    headers: { 'PRIVATE-TOKEN': process.env.GITLAB_TOKEN }
});


module.exports = {
    method: 'GET',
    path: '/api/projects',
    config: {
        handler: (request, reply) => {

            const apiUrl = `http://gitlab/api/v3/projects`

            console.log(process.env.GITLAB_TOKEN)

            wreck.get(apiUrl, (err, res, payload) => {
                reply(JSON.parse(payload))
            });

            // let projectsList = []
        
            // gitlab.projects.all(function (projects) {
            //     for (var i = 0; i < projects.length; i++) {
            //         projectsList.push(projects[i])
            //     }
            //     reply(projectsList)
            // });


        }
    }
}