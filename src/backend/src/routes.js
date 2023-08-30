// @ts-check

import { Router } from "express";
import { DatabasConnection } from "./infrastructure/database/connection.js";
import { gamesModule } from "./modules/game/module.js";

/**
 *
 * @param {DatabasConnection} db
 */
export const mainRoutes = (db) => {
  const routes = Router();
  routes.use("/games", gamesModule(db));

  return routes;
};
