// @ts-check

import { Router } from "express";
import { UserController } from "./controllerUser.js";

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
  return usersRoutes;
};
