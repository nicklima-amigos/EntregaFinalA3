// @ts-check

import { app } from './app.js';

const bootstrap = async () => {
  await app.init();
  console.log('app initialized');
  app.listen();
};

bootstrap();
