// @ts-check

import express, { Router } from "express";
import { DatabaseConnection } from "./infrastructure/database/connection.js";
import { gamesModule } from "./modules/game/gameModule.js";
import { platformsModule } from "./modules/platform/platformModule.js";
import { errorHandlingMiddleware } from "./middleware/errorHandling.js";
export class App {
  /**
   *
   * @param {DatabaseConnection} db
   */
  constructor(db) {
    this.db = db;
    this.app = express();
  }

  attachMiddleware() {
    this.app.use(express.json());
  }
  routes() {
    const router = Router();
    router.use("/games", gamesModule(this.db));
    router.use("/platforms", platformsModule(this.db));
    this.app.use(router);

    router.use(errorHandlingMiddleware);
  }

  async init() {
    this.attachMiddleware();
    this.routes();
  }

  listen() {
    console.log("server about to listen");
    return this.app.listen("3000", () => {
      console.log("Server is running on port 3000");
    });
  }
}
