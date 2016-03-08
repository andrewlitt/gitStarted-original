var helper = require('./controllerHelper');

helper.generateServerFile('server.js', [
    {
        name: 'express',
        version: '0.1.4'
    },
    {
        name: 'socket.io',
        version: '1.5.3'
    }
]);
console.log(helper.projectData[6].contents)
