// @ts-check

import { DatabaseConnection } from "../../infrastructure/database/connection.js";
import { PlatformsController } from "./platformController.js";
import { PlatformsRepository } from "./platformRepository.js";
import { platformsRoutes } from "./platformRoutes.js";
import { PlatformsService } from "./platformService.js";



/**
 *
 * @param {DatabaseConnection} db
 */
export const platformsModule = (db) => {
  const repository = new PlatformsRepository(db);
  const service = new PlatformsService(repository);
  const controller = new PlatformsController(service);
  return platformsRoutes(controller);
};
