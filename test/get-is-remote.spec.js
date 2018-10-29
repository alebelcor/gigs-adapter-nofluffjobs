'use strict';

import test from 'ava';

import getIsRemote from '../lib/get-is-remote';

test('it should return true', t => {
  t.true(getIsRemote({city: 'Remote'}));
  t.true(getIsRemote({remote: '100'}));
});

test('it should return false', t => {
  t.false(getIsRemote({}));
  t.false(getIsRemote({city: ''}));
  t.false(getIsRemote({remote: ''}));
  t.false(getIsRemote({remote: '10'}));
  t.false(getIsRemote({remote: '20'}));
  t.false(getIsRemote({remote: '30'}));
  t.false(getIsRemote({remote: '40'}));
  t.false(getIsRemote({remote: '50'}));
  t.false(getIsRemote({remote: '60'}));
  t.false(getIsRemote({remote: '70'}));
  t.false(getIsRemote({remote: '80'}));
  t.false(getIsRemote({remote: '90'}));
});
