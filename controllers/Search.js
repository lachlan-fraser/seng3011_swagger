'use strict';

var utils = require('../utils/writer.js');
var Search = require('../service/SearchService');

module.exports.search = function search (req, res, next, start_date, end_date, key_terms, location, timezone) {
  Search.search(start_date, end_date, key_terms, location, timezone)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
