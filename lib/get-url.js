'use strict';

module.exports = json => {
  return json.url ? `https://nofluffjobs.com/job/${json.url}` : null;
};
