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
    .get((req, res, next) => controller.find(req, res, next));

  usersRoutes
    .route("/:id")
    .get((req, res, next) => controller.findOne(req, res, next))
    .delete((req, res, next) => controller.delete(req, res, next))
    .put((req, res, next) => controller.update(req, res, next));

  return usersRoutes;
};