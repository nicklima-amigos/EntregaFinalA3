import { Router } from "express";
import { GamesController } from "./gameController.js";
import { validationMiddleware } from "../../middleware/validation.js";
import { validateCreateGame } from "./validation/validateCreateGame.js";
import { validateUpdateGame } from "./validation/validateUpdateGame.js";

export const gamesRoutes = (controller) => {
  const router = Router();
  router
    .route("/")
    .post(validationMiddleware(validateCreateGame), (req, res, next) =>
      controller.create(req, res, next),
    )
    .get((req, res, next) => controller.find(req, res, next));

  router
    .route("/:id")
    .get((req, res, next) => controller.findOne(req, res, next))
    .put(validationMiddleware(validateUpdateGame), (req, res, next) =>
      controller.update(req, res, next),
    )
    .delete((req, res, next) => controller.delete(req, res, next));

  router
    .route("/platform/:platformId")
    .get((req, res, next) => controller.findByPlatform(req, res, next));
  return router;
};
