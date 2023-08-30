// @ts-check

import { Router } from 'express';
import { GamesController } from './controller.js';

/**
 *
 * @param {GamesController} controller
 * @returns {Router}
 */
export const gamesRoutes = (controller) => {
  const gamesRoutes = Router();
  gamesRoutes.post('/', controller.create);
  return gamesRoutes;
};
