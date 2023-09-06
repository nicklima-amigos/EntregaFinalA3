// @ts-check

import { Router } from "express";
import { CategoriesController } from "./categoryController.js";

/**
 *
 * @param {CategoriesController} controller
 */
export const categoriesRoutes = (controller) => {
  console.log('controller', controller)
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
  return router;
};
