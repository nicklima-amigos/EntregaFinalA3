// @ts-check

import { Router } from "express";
import { GamesController } from "./gameController.js";

/**
 *
 * @param {GamesController} controller
 */
export const gamesRoutes = (controller) => {
  const gamesRoutes = Router();
  gamesRoutes
    .route("/")
    .post((req, res, next) => controller.create(req, res, next))
    .get((req, res, next) => controller.list(req, res, next));
  return gamesRoutes;
};
