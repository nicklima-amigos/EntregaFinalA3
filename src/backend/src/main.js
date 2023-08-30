// @ts-check

import { App } from "./app.js";
import { DatabasConnection } from "./infrastructure/database/connection.js";

const bootstrap = async () => {
  const db = new DatabasConnection("./backend.db");
  const app = new App(db);

  await app.init();
  app.listen();
};

bootstrap();
