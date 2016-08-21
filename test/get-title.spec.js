'use strict';

import test from 'ava';
import getTitle from '../lib/get-title';

test('it should return null', t => {
  t.deepEqual(null, getTitle({}));
  t.deepEqual(null, getTitle({title: '', level: ''}));
});

test('it should return at least the title', t => {
  t.deepEqual('foo', getTitle({title: 'foo'}));
  t.deepEqual('foo', getTitle({title: 'foo', level: ''}));
});

test('it should return at least the level', t => {
  t.deepEqual('bar', getTitle({title: '', level: 'bar'}));
  t.deepEqual('bar', getTitle({level: 'bar'}));
});

test('it should return the compound title', t => {
  t.deepEqual('baz zaz', getTitle({title: 'baz', 'level': 'zaz'}));
});
