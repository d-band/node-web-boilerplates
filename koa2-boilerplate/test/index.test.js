'use strict';

import { expect } from 'chai';

describe('Test: index.js', () => {
  it('should add return 3', () => {
    expect(3).to.equal(3);
  });
  it('should syncRun return 1', (done) => {
    Promise.resolve(1).then((data) => {
      expect(data).to.equal(1);
      done();
    });
  });
});
