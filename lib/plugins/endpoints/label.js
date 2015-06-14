'use strict';

var Easypost = require('node-easypost');
var easypost = Easypost(process.env.EASYPOST_KEY);

exports.register = function(server, options, next){
  server.route({
    method: 'POST',
    path: '/label',
    config: {
      description: 'Creates a shipping label',
      handler: function(request, reply){
        easypost.Shipment.create({
          to_address: request.payload.to,
          from_address: request.payload.from,
          parcel: request.payload.dimension
        }, function(createErr, createShipment) {
          createShipment.buy({rate: createShipment.lowestRate(['USPS', 'ups'])}, function(buyErr, buyShipment) {
            return reply({createErr: createErr, buyErr: buyErr, label: buyShipment.postage_label.label_url});
          });
        });
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'label'
};
