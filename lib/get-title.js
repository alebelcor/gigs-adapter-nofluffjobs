'use strict';

module.exports = json => {
  let title = null;

  if (json.title) {
    title = json.title.trim();
  }

  if (json.level) {
    title = title ? `${title} ${json.level}` : json.level;
  }

  return title;
};
