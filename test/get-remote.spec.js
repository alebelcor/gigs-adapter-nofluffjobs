'use strict';

import test from 'ava';
import getRemote from '../lib/get-remote';

test('it should return true', t => {
  t.true(getRemote({city: 'Remote'}));
  t.true(getRemote({remote: '60'}));
  t.true(getRemote({remote: '80'}));
  t.true(getRemote({remote: '100'}));
});

test('it should return false', t => {
  t.false(getRemote({}));
  t.false(getRemote({city: ''}));
  t.false(getRemote({remote: ''}));
  t.false(getRemote({remote: '10'}));
  t.false(getRemote({remote: '20'}));
  t.false(getRemote({remote: '40'}));
  t.false(getRemote({remote: '50'}));
});
