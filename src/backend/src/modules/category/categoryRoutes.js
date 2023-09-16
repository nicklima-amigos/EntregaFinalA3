import { Router } from "express";
export const categoriesRoutes = (controller) => {
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
    .route("/user/:userId")
    .get((req, res, next) => controller.findCategoriesByUserId(req, res, next));
  router
    .route("/game/:gameId")
    .get((req, res, next) => controller.findCategoriesByGameId(req, res, next));
  return router;
};
