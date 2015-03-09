var escape = require('escape-html');

module.exports = {
  hello: {
    id: 'hello',
    handler: function (request, reply) {
      reply('Hello, world!');
    }
  },
  echo: {
    id: 'echo',
    handler: function (request, reply) {
      reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
    }
  },
  missing: {
    id: '404',
    handler: function(request, reply){
      var msg = '404: Could not find a resource at route "' + escape(request.params.path) + '".';
      reply(msg).code(404);
    }
  }
};