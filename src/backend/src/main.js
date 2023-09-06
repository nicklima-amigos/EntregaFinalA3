// @ts-check

import { App } from "./app.js";
import { DatabaseConnection } from "./infrastructure/database/connection.js";

const bootstrap = async () => {
  const db = DatabaseConnection.getInstance("./backend.db");
  const app = new App(db);

  await app.init();
  app.listen();
};

bootstrap();
