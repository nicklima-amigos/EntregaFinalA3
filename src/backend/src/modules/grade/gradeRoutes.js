import { Router } from "express";
import { validationMiddleware } from "../../middleware/validation";
import { validateCreateGrade } from "./validation/validateCreateGrade";
import { validateUpdateGrade } from "./validation/validateUpdateGrade";

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
    .get((req, res, next) => controller.findOne(req, res, next))
    .put(validationMiddleware(validateUpdateGrade), (req, res, next) =>
      controller.update(req, res, next),
    )
    .delete((req, res, next) => controller.delete(req, res, next));

  router
    .route("/user/:userId")
    .get((req, res, next) => controller.findGradesByUser(req, res, next));
  return router;
};
