'use strict';

export function * index() {
  this.state = {
    title: 'koa home page'
  };

  yield this.render('index', {
    user: 'helloyou'
  });
}

export function * hello() {
  this.state = {
    title: 'koa hello page'
  };

  yield this.render('index', {
    user: 'helloyou'
  });
}
