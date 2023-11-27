import { Router } from "express";
import { validateUrlParam } from "../../middleware/validation.js";
import { validateCreateGradeMiddleware } from "./validation/validateCreateGrade.js";
import { validateUpdateGradeMiddleware } from "./validation/validateUpdateGrade.js";

export const gradesRoutes = (controller) => {
  const router = Router();
  router
    .route("/")
    .get((req, res, next) => controller.find(req, res, next))
    .put(validateCreateGradeMiddleware, (req, res, next) =>
      controller.upsert(req, res, next),
    )
    .post(validateCreateGradeMiddleware, (req, res, next) =>
      controller.create(req, res, next),
    );

  router
    .route("/:id")
    .get(validateUrlParam("id"), (req, res, next) =>
      controller.findOne(req, res, next),
    )
    .put(
      validateUrlParam("id"),
      validateUpdateGradeMiddleware,
      (req, res, next) => controller.update(req, res, next),
    )
    .delete((req, res, next) => controller.delete(req, res, next));

  router
    .route("/user/:userId")
    .get(validateUrlParam("userId"), (req, res, next) =>
      controller.findGradesByUser(req, res, next),
    );

  router.get(
    "/user/:userId/game/:gameId",
    validateUrlParam("userId"),
    validateUrlParam("gameId"),
    (req, res, next) => controller.findGradeByUserAndGame(req, res, next),
  );
  return router;
};
