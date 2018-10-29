'use strict';

const gigs = require('gigs');

const getTitle = require('./get-title');
const getUrl = require('./get-url');
const getLocation = require('./get-location');
const getIsRemote = require('./get-is-remote');
const getPublishedAt = require('./get-published-at');

const ADAPTER_SOURCE = 'nofluffjobs';
const ADAPTER_SOURCE_URL = 'https://nofluffjobs.com';

module.exports = function getGigs(json) {
  return json.postings.map(job => {
    return gigs.create({
      source: ADAPTER_SOURCE,
      source_url: ADAPTER_SOURCE_URL,
      title: getTitle(job),
      url: getUrl(job),
      company_name: job.name,
      location: getLocation(job),
      remote: getIsRemote(job),
      published_at: getPublishedAt(job)
    });
  });
};
