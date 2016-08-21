'use strict';

import test from 'ava';
import getUrl from '../lib/get-url';

test('it should return null', t => {
  t.deepEqual(null, getUrl({}));
  t.deepEqual(null, getUrl({url: ''}));
});

test('it should return the url', t => {
  t.deepEqual('https://nofluffjobs.com/job/foo/bar', getUrl({url: 'foo/bar'}));
});
