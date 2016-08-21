'use strict';

module.exports = function getTitle(json) {
  let title = null;

  if (json.title) {
    title = json.title;
  }

  if (json.level) {
    title = title ? `${title} ${json.level}`: json.level;
  }

  return title;
};
