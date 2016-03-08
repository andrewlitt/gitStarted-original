var helper = require('./controllerHelper');

helper.generatePackage('Test', 'zackharley', 'server.js', [
    {
        name: 'fuck-ruby',
        version: '0.1.4'
    },
    {
        name: 'socket.io',
        version: '1.5.3'
    }
]);
console.log(helper.projectData[7].contents)
