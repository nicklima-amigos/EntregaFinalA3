// @ts-check

import { Router } from "express";
import { DatabaseConnection } from "./infrastructure/database/connection.js";
import { gamesModule } from "./modules/game/gameModule.js";
import { usersModule } from "./modules/user/userModule.js";

/**
 *
 * @param {DatabaseConnection} db
 */
export const mainRoutes = (db) => {
  const routes = Router();
  routes.use("/games", gamesModule(db));
  routes.use("/users", usersModule(db));
  return routes;
};
