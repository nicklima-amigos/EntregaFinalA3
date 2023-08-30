// @ts-check

import { Router } from "express";
import { DatabaseConnection } from "./infrastructure/database/connection.js";
import { gamesModule } from "./modules/game/module.js";

/**
 *
 * @param {DatabaseConnection} db
 */
export const mainRoutes = (db) => {
  const routes = Router();
  routes.use("/games", gamesModule(db));

  return routes;
};
