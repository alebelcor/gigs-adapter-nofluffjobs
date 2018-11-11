'use strict';

const dayjs = require('dayjs');

module.exports = json => {
  let publishedAt = null;

  if (json.posted) {
    publishedAt = dayjs(json.posted).format('YYYY-MM-DD');
  }

  return publishedAt;
};
