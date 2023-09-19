import express from "express";
import { validationMiddleware } from "../../middleware/validation.js";
import { validateSignIn } from "./validation/validateSignIn.js";
import { validateSignUp } from "./validation/validateSignUp.js";

export const authRoutes = (controller) => {
  const router = express.Router();

  router.post(
    "/signin",
    validationMiddleware(validateSignIn),
    (req, res, next) => controller.signIn(req, res, next),
  );
  router.post(
    "/signup",
    validationMiddleware(validateSignUp),
    (req, res, next) => controller.signUp(req, res, next),
  );
  router.get("/authorize", (req, res, next) =>
    controller.authorize(req, res, next),
  );

  return router;
};
