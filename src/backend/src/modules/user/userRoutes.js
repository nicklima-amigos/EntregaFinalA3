// @ts-check

import { Router } from "express";
import { UserController } from "./userController.js";

/**
 *
 * @param {UserController} controller
 */
export const usersRoutes = (controller) => {
  const usersRoutes = Router();
  usersRoutes
    .route("/")
    .post((req, res, next) => controller.create(req, res, next))
    .get((req, res, next) => controller.list(req, res, next));

  usersRoutes.get("/:id", (req, res, next) => controller.get(req, res, next));

  return usersRoutes;
};
