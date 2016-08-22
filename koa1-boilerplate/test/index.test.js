'use strict';

import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import app from '../src';

chai.use(chaiHttp);

describe('Test: index.js', () => {
  var request = null;
  before(() => {
    request = chai.request.agent(app.listen());
  });

  it('should / return home page', (done) => {
    request
      .get('/')
      .end(function(err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.text).to.match(/home page/);
        done();
      });
  });

  it('should /hello return hello page', (done) => {
    request
      .get('/hello')
      .end(function(err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.text).to.match(/hello page/);
        done();
      });
  });

  it('should sync return 1', (done) => {
    Promise.resolve(1).then((data) => {
      expect(data).to.equal(1);
      done();
    });
  });
});
