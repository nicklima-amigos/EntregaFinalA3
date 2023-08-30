// @ts-check

import { Router } from "express";
import { GamesController } from "./controller.js";

const gamesController = new GamesController();
const gamesRoutes = Router();

gamesRoutes.post("/", gamesController.create);

export default gamesRoutes;
