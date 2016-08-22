'use strict';

import { join } from 'path';
import koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import view from 'koa-view';

import routes from './routes';

const app = koa();

app.use(bodyParser());
app.use(logger());

// view
app.use(view(join(__dirname, '../views')));

// routes
routes(app);

if (!module.parent) {
  app.listen(3000);
  console.log('Running site at: http://127.0.0.1:3000');
}

export default app;
