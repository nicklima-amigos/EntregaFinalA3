// @ts-check

import { Router } from 'express';
import { gamesRoutes } from './modules/game/routes.js';
import { gamesModule } from './modules/game/module.js';
import { DatabaseConnector } from './infrastructure/database/connector.js';

/**
 *
 * @param {DatabaseConnector} db
 */
export const mainRoutes = (db) => {
  const routes = Router();
  routes.use('/games', gamesModule(db));

  return routes;
};
