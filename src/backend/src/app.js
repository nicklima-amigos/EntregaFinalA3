import express, { Router } from "express";
import { errorHandlingMiddleware } from "./middleware/errorHandling.js";
import { gamesModule } from "./modules/game/gameModule.js";
import { gradesModule } from "./modules/grade/gradeModule.js";
import { categoriesModule } from "./modules/category/categoryModule.js";
import { platformsModule } from "./modules/platform/platformModule.js";
import { usersModule } from "./modules/user/usersModule.js";
import cors from "cors";
import { authModule } from "./modules/auth/authModule.js";
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
      .use("/categories", categoriesModule(this.db))
      .use("/grades", gradesModule(this.db))
      .use("/auth", authModule(this.db))
      .get("/", (req, res) => {
        res.status(200).send({ status: "Ok" });
      })
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
