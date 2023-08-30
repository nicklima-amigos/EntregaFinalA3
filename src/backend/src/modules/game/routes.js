// @ts-check

import { Router } from 'express';
import { GamesController } from './controller.js';

/**
 * @param {GamesController} controller
 * @returns {Router}
 */
export const startGamesRoutes = (controller) => {
  const gamesRoutes = Router();

  gamesRoutes.route('/').post(controller.create);

  return gamesRoutes;
};

export default startGamesRoutes;
