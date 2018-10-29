'use strict';

const getIsRemote = require('./get-is-remote');

module.exports = function getLocation(json) {
  let location = null;

  if (getIsRemote(json)) {
    return location;
  }

  if (json.city) {
    location = json.city;
  }

  if (json.country && json.country.name) {
    location = location ? `${location}, ${json.country.name}` : json.country.name;
  }

  return location;
};
