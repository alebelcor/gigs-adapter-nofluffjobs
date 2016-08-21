'use strict';

const getRemote = require('./get-remote');

module.exports = function getLocation(json) {
  let location = null;

  if (getRemote(json)) {
    return location;
  }

  if (json.city) {
    location = json.city;
  }

  if (json.country && json.country.name) {
    location = location ? `${location}, ${json.country.name}`: json.country.name;
  }

  return location;
};
