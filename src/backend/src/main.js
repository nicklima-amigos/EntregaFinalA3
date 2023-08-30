// @ts-check

import { app } from "./app.js";
const bootstrap = async () => {
  await app.init();
  app.listen();
};

bootstrap();
