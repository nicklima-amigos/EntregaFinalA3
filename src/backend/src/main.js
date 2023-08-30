// @ts-check

import { App } from './app.js';
import { DatabaseConnector } from './infrastructure/database/connector.js';

const bootstrap = async () => {
  const db = new DatabaseConnector('./backend.db');
  const app = new App(db);

  await app.init();
  app.listen();
};

bootstrap();
