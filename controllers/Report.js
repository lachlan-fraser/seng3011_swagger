'use strict';

var utils = require('../utils/writer.js');
var Report = require('../service/ReportService');

module.exports.report = function report (req, res, next, report_id) {
  Report.report(report_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
