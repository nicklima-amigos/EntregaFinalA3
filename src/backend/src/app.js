// @ts-check

import express, { Router } from 'express';
import { GamesController } from './modules/game/controller.js';
import { GamesRepository } from './modules/game/repository.js';
import startGamesRoutes from './modules/game/routes.js';
import { GamesService } from './modules/game/service.js';

class App {
  constructor() {
    this.app = express();
  }

  attachMiddleware() {
    this.app.use(express.json());
  }

  /**
   *
   * @param {Router} mainRouter
   */
  routes(mainRouter) {
    const gamesRepository = new GamesRepository();
    const gamesService = new GamesService(gamesRepository);
    const gamesController = new GamesController(gamesService);
    mainRouter.use('/games', startGamesRoutes(gamesController));
  }

  async init() {
    this.attachMiddleware();

    // initialize routes
    const mainRouter = express.Router();
    this.app.use('/api', mainRouter);

    this.routes(mainRouter);
  }

  listen() {
    console.log('server about to listen');
    return this.app.listen('3000', () => {
      console.log('Server is running on port 3000');
    });
  }
}

export const app = new App();
