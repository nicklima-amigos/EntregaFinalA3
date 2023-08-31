// @ts-check

import { Router } from "express";
import { GamesController } from "./controller.js";

/**
 *
 * @param {GamesController} controller
 */
export const gamesRoutes = (controller) => {
  const router = Router();
  router
    .route("/")
    .post((req, res, next) => controller.create(req, res, next))
    .get((req, res, next) => controller.list(req, res, next));
  return router;
};
