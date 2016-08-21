'use strict';

const moment = require('moment');

module.exports = function getPublishedAt(json) {
  let publishedAt = null;

  if (json.posted) {
    publishedAt = moment.utc(json.posted).format('YYYY-MM-DD');
  }

  return publishedAt;
};
