import express from "express";
import { validationMiddleware } from "../../middleware/validation.js";
import { validateSignIn } from "./validation/validateSignIn.js";

export const authRoutes = (controller) => {
  const router = express.Router();

  router.post(
    "/signin",
    validationMiddleware(validateSignIn),
    (req, res, next) => controller.signIn(req, res, next),
  );
  router.get("/authorize", (req, res, next) =>
    controller.authorize(req, res, next),
  );

  return router;
};
