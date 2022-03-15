'use strict';


/**
 * Search the ProMed database
 * Enter parameters to perform a search
 *
 * start_date String The start date of the period of interest for disease reports
 * end_date String The end date of the period of interest for disease reports
 * key_terms List A list of key terms for disease reports
 * location String The location for disease reports
 * timezone String The timezone for disease reports (optional)
 * returns List
 **/
exports.search = function(start_date,end_date,key_terms,location,timezone) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "reports" : [ {
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
  }, {
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
  } ],
  "date_of_publication" : "2022-01-05 xx:xx:xx",
  "main_text" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent convallis elit at leo finibus, a ultricies enim accumsan. Donec elementum sagittis quam, ac dapibus erat aliquam id. Phasellus et libero vitae mauris volutpat dignissim. Cras facilisis dui eleifend viverra sagittis. Cras eu augue vitae elit vestibulum accumsan quis at dolor. Phasellus blandit maximus mi, quis lacinia odio viverra ac. Phasellus dapibus vel nunc eu  lobortis.",
  "headline" : "Measles Outbreak in Sydney",
  "url" : "www.promed.com/measles-outbreak-sydney-2022"
}, {
  "reports" : [ {
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
  }, {
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
  } ],
  "date_of_publication" : "2022-01-05 xx:xx:xx",
  "main_text" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent convallis elit at leo finibus, a ultricies enim accumsan. Donec elementum sagittis quam, ac dapibus erat aliquam id. Phasellus et libero vitae mauris volutpat dignissim. Cras facilisis dui eleifend viverra sagittis. Cras eu augue vitae elit vestibulum accumsan quis at dolor. Phasellus blandit maximus mi, quis lacinia odio viverra ac. Phasellus dapibus vel nunc eu  lobortis.",
  "headline" : "Measles Outbreak in Sydney",
  "url" : "www.promed.com/measles-outbreak-sydney-2022"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

