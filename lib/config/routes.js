// == DEPENDENCIES =============================================================
var requireDirectory = require('require-directory');

// == VARS =====================================================================
var controller = requireDirectory(module, '../controllers');

// == ROUTES ===================================================================
module.exports = [
  {
    method: 'GET',
    path: '/',
    config: controller.test.hello
  },
  {
    method: 'GET',
    path: '/{name}',
    config: controller.test.echo
  },
  {
    method: 'GET',
    path: '/{path*}',
    config: controller.test.missing
  }
]