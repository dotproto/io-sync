// == Dependencies =============================================================
var Hapi = require('hapi');

// Import install-specific environment variables
var dotenv = require('dotenv');
dotenv.load();


// == Defaults Vars ============================================================
var port = process.env.PORT || 8080;


// == Server ===================================================================
// Instantiate and load a test server

var server = new Hapi.Server();
server.connection({ port: port });

server.route(require('./lib/config/routes'));

server.start(function () {
    console.log('Server running at:', server.info.uri);
});

