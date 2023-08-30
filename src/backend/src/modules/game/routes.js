// @ts-check

import { Router } from "express";
import { GamesController } from "./controller.js";

/**
 *
 * @param {GamesController} controller
 * @returns {Router}
 */
export const gamesRoutes = (controller) => {
  const gamesRoutes = Router();
  gamesRoutes
    .route("/")
    .post((req, res, next) => controller.create(req, res, next))
    .get((req, res, next) => controller.list(req, res, next));
  return gamesRoutes;
};
