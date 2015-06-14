'use strict';

exports.register = function(server, options, next){
  server.route({
    method: 'GET',
    path: '/{param*}',
    config: {
      description: 'Static route handler',
      handler: {
        directory: {
          path: __dirname + '/../../../public'
        }
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'public'
};
