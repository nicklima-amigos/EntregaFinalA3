import { Router } from "express";
import { validationMiddleware } from "../../middleware/validation";
import { validateCreatePlatform } from "./validation/validateCreatePlatform";
import { validateUpdatePlatform } from "./validation/validateUpdatePlatform";

export const platformsRoutes = (controller) => {
  const router = Router();
  router
    .route("/")
    .post(validationMiddleware(validateCreatePlatform), (req, res, next) =>
      controller.create(req, res, next),
    )
    .get((req, res, next) => controller.find(req, res, next));
  router
    .route("/:id")
    .get((req, res, next) => controller.findOne(req, res, next))
    .put(validationMiddleware(validateUpdatePlatform), (req, res, next) =>
      controller.update(req, res, next),
    )
    .delete((req, res, next) => controller.delete(req, res, next));

  router
    .route("/:id/games/:gameId")
    .post((req, res, next) => controller.addGame(req, res, next));
  return router;
};
