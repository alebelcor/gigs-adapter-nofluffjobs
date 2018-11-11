'use strict';

import test from 'ava';

import getPublishedAt from '../lib/get-published-at';

test('it should return the date when the job was published', t => {
  t.deepEqual('2016-12-15', getPublishedAt({posted: 1481785200000}));
});

test('it should return null', t => {
  t.deepEqual(null, getPublishedAt({}));
});
