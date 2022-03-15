'use strict';


/**
 * Request a specific article
 * Enter article ID to perform a request
 *
 * article_id Integer The ID of the requested article
 * returns Article
 **/
exports.article = function(article_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "date_of_publication" : "2022-01-05 xx:xx:xx",
  "main_text" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent convallis elit at leo finibus, a ultricies enim accumsan. Donec elementum sagittis quam, ac dapibus erat aliquam id. Phasellus et libero vitae mauris volutpat dignissim. Cras facilisis dui eleifend viverra sagittis. Cras eu augue vitae elit vestibulum accumsan quis at dolor. Phasellus blandit maximus mi, quis lacinia odio viverra ac. Phasellus dapibus vel nunc eu  lobortis.",
  "headline" : "Measles Outbreak in Sydney",
  "url" : "www.promed.com/measles-outbreak-sydney-2022"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

