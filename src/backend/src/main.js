import { App } from "./app.js";
import { getDatabaseConnection } from "./infrastructure/database/connection.js";

const bootstrap = async () => {
  const db = getDatabaseConnection();
  const app = new App(db);

  await app.init();
  app.listen();
};

bootstrap();
