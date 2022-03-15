'use strict';


/**
 * Request a specific disease report
 * Enter report ID to perform a request
 *
 * report_id Integer The ID of the requested report
 * returns Report
 **/
exports.report = function(report_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "event_date" : "2022-01-05 xx:xx:xx to 2022-01-05",
  "diseases" : [ "measles", "measles" ],
  "locations" : [ {
    "country" : "Australia",
    "location" : "Sydney"
  }, {
    "country" : "Australia",
    "location" : "Sydney"
  } ],
  "syndromes" : [ "outbreak", "outbreak" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

