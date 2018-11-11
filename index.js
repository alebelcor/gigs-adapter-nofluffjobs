'use strict';

const defaultsDeep = require('lodash/defaultsDeep');
const got = require('got');

const getGotOptions = require('./lib/get-got-options');
const getResponseBody = require('./lib/get-response-body');
const getGigs = require('./lib/get-gigs');

const ADAPTER_ENDPOINT = 'https://nofluffjobs.com/api/search/posting';

module.exports = async options => {
  options = defaultsDeep({}, options, {
    endpoint: ADAPTER_ENDPOINT,
    gotOptions: getGotOptions()
  });

  try {
    const response = await got.get(options.endpoint, options.gotOptions);
    return getGigs(getResponseBody(response));
  } catch (error) {
    console.error(error);
  }
};
