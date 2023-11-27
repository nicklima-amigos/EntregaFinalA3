import { Router } from "express";
import { validateUrlParam } from "../../middleware/validation.js";
import { validateCreateGameMiddleware } from "./validation/validateCreateGame.js";
import { validateUpdateGameMiddleware } from "./validation/validateUpdateGame.js";

export const gamesRoutes = (controller) => {
  const router = Router();
  router
    .route("/")
    .post(validateCreateGameMiddleware, (req, res, next) =>
      controller.create(req, res, next),
    )
    .get((req, res, next) => controller.find(req, res, next));

  router
    .route("/:id")
    .get(validateUrlParam("id"), (req, res, next) =>
      controller.findOne(req, res, next),
    )
    .put(
      validateUrlParam("id"),
      validateUpdateGameMiddleware,
      (req, res, next) => controller.update(req, res, next),
    )
    .delete((req, res, next) => controller.delete(req, res, next));

  router
    .route("/platform/:platformId")
    .get(validateUrlParam("platformId"), (req, res, next) =>
      controller.findByPlatform(req, res, next),
    );

  router
    .route("/:gameId/platform/:platformId")
    .post((req, res, next) => controller.associatePlatform(req, res, next))
    .delete((req, res, next) => controller.dissociatePlatform(req, res, next));

  router.route("/:gameId/platforms").get((req, res, next) => {
    controller.findGamePlatforms(req, res, next);
  });
  return router;
};
