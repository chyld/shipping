'use strict';

exports.register = function(server, options, next){
  server.route({
    method: 'POST',
    path: '/label',
    config: {
      description: 'Creates a shipping label',
      handler: function(request, reply){
        return reply('ok');
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'label'
};
