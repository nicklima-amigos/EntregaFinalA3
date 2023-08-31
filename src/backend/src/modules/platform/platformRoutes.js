// @ts-check

import { Router } from "express";
import { PlatformsController } from "./platformController.js";

/**
 *
 * @param {PlatformsController} controller
 */
export const platformsRoutes = (controller) => {
  const router = Router();
  router
    .route("/")
    .post((req, res, next) => controller.create(req, res, next))
    .get((req, res, next) => controller.find(req, res, next));
  router
    .route("/:id")
    .get((req, res, next) => controller.findOne(req, res, next))
    .put((req, res, next) => controller.update(req, res, next))
    .delete((req, res, next) => controller.delete(req, res, next))
  return router;
};
