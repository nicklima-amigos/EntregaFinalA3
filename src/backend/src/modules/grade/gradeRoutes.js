import { Router } from "express";
import { validationMiddleware } from "../../middleware/validation.js";
import { validateCreateGrade } from "./validation/validateCreateGrade.js";
import { validateUpdateGrade } from "./validation/validateUpdateGrade.js";
import { validateUrlParam } from "../../middleware/validation.js";

export const gradesRoutes = (controller) => {
  const router = Router();
  router
    .route("/")
    .get((req, res, next) => controller.find(req, res, next))
    .post(validationMiddleware(validateCreateGrade), (req, res, next) =>
      controller.create(req, res, next),
    );

  router
    .route("/:id")
    .get(validateUrlParam("id"), (req, res, next) =>
      controller.findOne(req, res, next),
    )
    .put(
      validateUrlParam("id"),
      validationMiddleware(validateUpdateGrade),
      (req, res, next) => controller.update(req, res, next),
    )
    .delete((req, res, next) => controller.delete(req, res, next));

  router
    .route("/user/:userId")
    .get(validateUrlParam("userId"), (req, res, next) =>
      controller.findGradesByUser(req, res, next),
    );
  return router;
};
