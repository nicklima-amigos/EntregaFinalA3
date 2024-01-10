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
    const platforms = startPlatformsModule(this.db);
    const users = startUsersModule(this.db);
    const games = startGamesModule(this.db, platforms.repository);
    const categories = startCategoriesModule(
      this.db,
      users.repository,
      games.repository,
    );
    const grades = startGradesModule(this.db, games.repository);
    const auth = startAuthModule(users.service);
    return {
      platforms,
      users,
      games,
      categories,
      grades,
      auth,
    };
  }

  routes() {
    const router = Router();
    const modules = this.injectDependencies();

    router
      .use("/games", modules.games.routes)
      .use("/platforms", modules.platforms.routes)
      .use("/users", modules.users.routes)
      .use("/categories", modules.categories.routes)
      .use("/grades", modules.grades.routes)
      .use("/auth", modules.auth.routes)
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
