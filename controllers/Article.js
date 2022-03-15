'use strict';

var utils = require('../utils/writer.js');
var Article = require('../service/ArticleService');

module.exports.article = function article (req, res, next, article_id) {
  Article.article(article_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
