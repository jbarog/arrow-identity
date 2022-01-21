/* eslint-disable no-undef */
const { DEFAULT_NUMBER, DEFAULT_STRING } = require('./test-objects');
const identity = require('../src/identity');

describe('test identity', () => {
  test('should return identity', async () => {
    const number = identity(DEFAULT_NUMBER);
    expect(number).toEqual(DEFAULT_NUMBER);
    const string = identity(DEFAULT_STRING);
    expect(string).toEqual(DEFAULT_STRING);
  });
});
