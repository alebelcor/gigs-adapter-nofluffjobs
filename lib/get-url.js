'use strict';

module.exports = function getUrl(json) {
  let url = null;

  if (json.url) {
    url = `https://nofluffjobs.com/job/${json.url}`;
  }

  return url;
};
