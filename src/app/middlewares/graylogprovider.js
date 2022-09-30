const graylog2 = require('graylog2');
var logger = new graylog2.graylog({
    servers: [
        { 'host': '127.0.0.1', port: 12201 }
    ],
   
    facility: 'Node.js',     // the facility for these log messages
                             // (optional, default: "Node.js")
    bufferSize: 1350         // max UDP packet size, should never exceed the
                             // MTU of your system (optional, default: 1400)
});

logger.on('error', function (error) {
    console.error('Error while trying to write to graylog2:', error);
});

module.exports = logger;

