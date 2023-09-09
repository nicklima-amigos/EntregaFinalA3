// @ts-check
import { GradesController } from "./gradeController.js";
import { Router } from "express";

/**
 * @param {GradesController} controller
 */
export const gradesRoutes = (controller) => {
  const router = Router();
  router
    .route("/")
    .get((req, res, next) => controller.find(req, res, next))
    .post((req, res, next) => controller.create(req, res, next));

  router
    .route("/:id")
    .get((req, res, next) => controller.findOne(req, res, next))
    .put((req, res, next) => controller.update(req, res, next))
    .delete((req, res, next) => controller.delete(req, res, next));

  router
    .route("/user/:userId")
    .get((req, res, next) => controller.findGradesByUser(req, res, next));
  return router;
};
