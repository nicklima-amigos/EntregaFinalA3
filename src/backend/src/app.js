import express, { Router } from "express";
import { errorHandlingMiddleware } from "./middleware/errorHandling.js";
import { startGamesModule } from "./modules/game/gameModule.js";
import { startGradesModule } from "./modules/grade/gradeModule.js";
import { startCategoriesModule } from "./modules/category/categoryModule.js";
import { startPlatformsModule } from "./modules/platform/platformModule.js";
import { startUsersModule } from "./modules/user/usersModule.js";
import cors from "cors";
import { startAuthModule } from "./modules/auth/authModule.js";

export class App {
  constructor(db) {
    this.db = db;
    this.app = express();
  }

  attachMiddleware() {
    this.app.use(express.json()).use(cors());
  }

  injectDependencies() {
    const platformsModule = startPlatformsModule(this.db);
    const usersModule = startUsersModule(this.db);
    const gamesModule = startGamesModule(this.db, platformsModule.repository);
    const categoriesModule = startCategoriesModule(
      this.db,
      usersModule.repository,
      gamesModule.repository,
    );
    const gradesModule = startGradesModule(this.db, gamesModule.repository);
    const authModule = startAuthModule(usersModule.service);
    return {
      platformsModule,
      usersModule,
      gamesModule,
      categoriesModule,
      gradesModule,
      authModule,
    };
  }

  routes() {
    const router = Router();
    const {
      platformsModule,
      usersModule,
      gamesModule,
      categoriesModule,
      gradesModule,
      authModule,
    } = this.injectDependencies();

    router
      .use("/games", gamesModule.routes)
      .use("/platforms", platformsModule.routes)
      .use("/users", usersModule.routes)
      .use("/categories", categoriesModule.routes)
      .use("/grades", gradesModule.routes)
      .use("/auth", authModule.routes)
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
