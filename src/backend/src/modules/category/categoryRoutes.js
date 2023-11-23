import { Router } from "express";
import { validateUrlParam } from "../../middleware/validation.js";
export const categoriesRoutes = (controller) => {
  const router = Router();
  router
    .route("/")
    .post((req, res, next) => controller.create(req, res, next))
    .get((req, res, next) => controller.find(req, res, next));

  router
    .route("/:id")
    .get(validateUrlParam("id"), (req, res, next) =>
      controller.findOne(req, res, next),
    )
    .put(validateUrlParam("id"), (req, res, next) =>
      controller.update(req, res, next),
    )
    .delete(validateUrlParam("id"), (req, res, next) =>
      controller.delete(req, res, next),
    );

  router
    .route("/user/:userId")
    .get(validateUrlParam("userId"), (req, res, next) =>
      controller.findCategoriesByUserId(req, res, next),
    );
  router
    .route("/game/:gameId")
    .get(validateUrlParam("gameId"), (req, res, next) =>
      controller.findCategoriesByGameId(req, res, next),
    );

  router
    .route("/game/:gameId/user/:userId")
    .get(
      validateUrlParam("gameId"),
      validateUrlParam("userId"),
      (req, res, next) =>
        controller.findCategoriesByUserAndGame(req, res, next),
    );
  return router;
};
