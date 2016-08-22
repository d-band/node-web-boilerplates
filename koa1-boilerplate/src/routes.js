'use strict';

import Router from 'koa-router';
import * as home from './controllers/home';

export default function routes(app) {
  const router = Router();

  router.get('/', home.index);
  router.get('/hello', home.hello);

  app.use(router.routes());
  app.use(router.allowedMethods());
}
