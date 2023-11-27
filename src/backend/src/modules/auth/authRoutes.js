import express from "express";
import { validateSignInMiddleware } from "./validation/validateSignIn.js";

export const authRoutes = (controller) => {
  const router = express.Router();

  router.post("/signin", validateSignInMiddleware, (req, res, next) =>
    controller.signIn(req, res, next),
  );
  router.get("/authorize", (req, res, next) =>
    controller.authorize(req, res, next),
  );

  return router;
};
