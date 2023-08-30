import { Router } from "express";
import gamesRoutes from "./modules/game/routes.js";
const routes = Router();
routes.use("/games", gamesRoutes);
export { routes };
