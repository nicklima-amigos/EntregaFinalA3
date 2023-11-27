import { Router } from "express";
import { validateCreateUserMiddleware } from "./validation/validateCreateUser.js";
import { validateUpdateUserMiddleware } from "./validation/validateUpdateUser.js";

export const usersRoutes = (controller) => {
  const usersRoutes = Router();
  usersRoutes
    .route("/")
    .get((req, res, next) => controller.find(req, res, next))
    .post(validateCreateUserMiddleware, (req, res, next) =>
      controller.create(req, res, next),
    );

  usersRoutes
    .route("/:id")
    .get((req, res, next) => controller.findOne(req, res, next))
    .delete((req, res, next) => controller.delete(req, res, next))
    .put(validateUpdateUserMiddleware, (req, res, next) =>
      controller.update(req, res, next),
    );

  usersRoutes
    .route("/email/:email")
    .get((req, res, next) => controller.findOneByEmail(req, res, next));

  usersRoutes
    .route("/username/:username")
    .get((req, res, next) => controller.findOneByUsername(req, res, next));

  return usersRoutes;
};
