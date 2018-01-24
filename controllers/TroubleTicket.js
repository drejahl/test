'use strict';

var utils = require('../utils/writer.js');
var TroubleTicket = require('../service/TroubleTicketService');

module.exports.troubleTicketCreate = function troubleTicketCreate (req, res, next) {
  var troubleTicket = req.swagger.params['troubleTicket'].value;
  TroubleTicket.troubleTicketCreate(troubleTicket)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.troubleTicketFind = function troubleTicketFind (req, res, next) {
  var fields = req.swagger.params['fields'].value;
  TroubleTicket.troubleTicketFind(fields)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.troubleTicketGet = function troubleTicketGet (req, res, next) {
  var troubleTicketId = req.swagger.params['troubleTicketId'].value;
  var fields = req.swagger.params['fields'].value;
  TroubleTicket.troubleTicketGet(troubleTicketId,fields)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.troubleTicketPatch = function troubleTicketPatch (req, res, next) {
  var troubleTicketId = req.swagger.params['troubleTicketId'].value;
  var troubleTicket = req.swagger.params['troubleTicket'].value;
  TroubleTicket.troubleTicketPatch(troubleTicketId,troubleTicket)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.troubleTicketUpdate = function troubleTicketUpdate (req, res, next) {
  var troubleTicketId = req.swagger.params['troubleTicketId'].value;
  var troubleTicket = req.swagger.params['troubleTicket'].value;
  TroubleTicket.troubleTicketUpdate(troubleTicketId,troubleTicket)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
