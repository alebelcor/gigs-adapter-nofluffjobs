'use strict';

module.exports = function getIsRemote(data) {
  return data.city === 'Remote' || Number(data.remote) === 100;
};
