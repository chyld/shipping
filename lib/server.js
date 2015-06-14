'use strict';

var Hapi = require('hapi');
var Plugins = require('./tools/plugins');

exports.init = function(cb){
  var server = new Hapi.Server();
  server.connection({port: process.env.PORT || 8000});

  server.register(Plugins, function(pluginErr){
    if(pluginErr){ return cb(pluginErr); }

    server.start(function(serverErr){
      return cb(serverErr, server);
    });
  });
};
