'use strict';

var utils = require('../utils/writer.js');
var Live = require('../service/LiveService');

module.exports.live = function live (req, res, next) {
  Live.live()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
