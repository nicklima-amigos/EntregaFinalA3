import express, { Router } from "express";
import { errorHandlingMiddleware } from "./middleware/errorHandling.js";
import { gamesModule } from "./modules/game/gameModule.js";
import { gradesModule } from "./modules/grade/gradeModule.js";
import { platformsModule } from "./modules/platform/platformModule.js";
import { usersModule } from "./modules/user/usersModule.js";
import cors from "cors";
export class App {
  constructor(db) {
    this.db = db;
    this.app = express();
  }

  attachMiddleware() {
    this.app.use(express.json()).use(cors());
  }

  routes() {
    const router = Router();
    router
      .use("/games", gamesModule(this.db))
      .use("/platforms", platformsModule(this.db))
      .use("/users", usersModule(this.db))
      .use("/grades", gradesModule(this.db))
      .use(errorHandlingMiddleware);
    this.app.use(router);
  }

  async init() {
    this.attachMiddleware();
    this.routes();
  }

  listen() {
    return this.app.listen("3000", () => {
      console.log("Server is running on port 3000");
    });
  }
}
