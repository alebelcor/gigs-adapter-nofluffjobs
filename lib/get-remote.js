'use strict';

module.exports = function getRemote(data) {
  return data.city === 'Remote' || Number(data.remote) > 50;
};
