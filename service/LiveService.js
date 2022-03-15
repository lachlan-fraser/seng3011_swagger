'use strict';


/**
 * Check if the server is live
 * The server will return its live status and version
 *
 * returns Live
 **/
exports.live = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "version" : "1.0.0",
  "live" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

