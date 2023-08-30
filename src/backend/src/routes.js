// @ts-check

import { Router } from 'express';
import { DatabaseConnector } from './infrastructure/database/connector.js';
import { gamesModule } from './modules/game/module.js';

/**
 *
 * @param {DatabaseConnector} db
 */
export const mainRoutes = (db) => {
  const routes = Router();
  routes.use('/games', gamesModule(db));

  return routes;
};
