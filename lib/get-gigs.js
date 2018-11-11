'use strict';

const gigs = require('gigs');

const getTitle = require('./get-title');
const getUrl = require('./get-url');
const getLocation = require('./get-location');
const getIsRemote = require('./get-is-remote');
const getPublishedAt = require('./get-published-at');

const ADAPTER_SOURCE = 'nofluffjobs';
const ADAPTER_SOURCE_URL = 'https://nofluffjobs.com';

module.exports = json => {
  return json.postings.map(job => {
    return gigs.create({
      source: ADAPTER_SOURCE,
      source_url: ADAPTER_SOURCE_URL, // eslint-disable-line camelcase
      title: getTitle(job),
      url: getUrl(job),
      company_name: job.name, // eslint-disable-line camelcase
      location: getLocation(job),
      remote: getIsRemote(job),
      published_at: getPublishedAt(job) // eslint-disable-line camelcase
    });
  });
};
