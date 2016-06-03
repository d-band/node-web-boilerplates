'use strict';

import co from 'co';
import { join } from 'path';

import Koa from 'koa';
import logger from 'koa-logger';
import view from 'koa-view';
import convert from 'koa-convert';

import routes from './routes';

const app = new Koa();

// logger
app.use(logger());

// view
app.use(convert(view(join(__dirname, '../views'))));
app.use(async (ctx, next) => {
  ctx.render = co.wrap(ctx.render);
  await next();
});

// routes
routes(app);

if (!module.parent) {
  app.listen(3000);
  console.log('Running site at: http://127.0.0.1:3000');
}

export default app;
