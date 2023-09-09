// @ts-check

import { Router } from "express";
import { validationMiddleware } from "../../middleware/validation.js";
import { validateCreateUser } from "./validation/validateCreateUser.js";
import { validateUpdateUser } from "./validation/validateUpdateUser.js";
import { UserController } from "./userController.js";

/**
 *
 * @param {UserController} controller
 */
export const usersRoutes = (controller) => {
  const usersRoutes = Router();
  usersRoutes
    .route("/")
    .get((req, res, next) => controller.find(req, res, next))
    .post(validationMiddleware(validateCreateUser), (req, res, next) =>
      controller.create(req, res, next),
    );

  usersRoutes
    .route("/:id")
    .get((req, res, next) => controller.findOne(req, res, next))
    .delete((req, res, next) => controller.delete(req, res, next))
    .put(validationMiddleware(validateUpdateUser), (req, res, next) =>
      controller.update(req, res, next),
    );

  return usersRoutes;
};
