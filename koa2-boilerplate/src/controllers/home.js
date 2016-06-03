'use strict';

export async function index(ctx, next) {
  ctx.state = {
    title: 'koa2 home page'
  };

  await ctx.render('index', {
    user: 'helloyou'
  });
}

export async function hello(ctx, next) {
  ctx.state = {
    title: 'koa2 hello page'
  };

  await ctx.render('index', {
    user: 'helloyou'
  });
}
