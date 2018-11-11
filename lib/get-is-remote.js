'use strict';

module.exports = data => {
  return data.city === 'Remote' || Number(data.remote) === 100;
};
