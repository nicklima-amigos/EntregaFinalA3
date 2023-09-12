import { Router } from "express";

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
    .delete((req, res, next) => controller.delete(req, res, next));

  router
    .route("/:id/games/:gameId")
    .post((req, res, next) => controller.addGame(req, res, next));
  return router;
};
