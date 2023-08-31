// @ts-check

import { DatabaseConnection } from "../../infrastructure/database/connection.js";
import { UserController } from "./controllerUser.js";
import { UsersRepository } from "./repositoryUser.js";
import { usersRoutes } from "./routesUser.js";
import { UsersService } from "./serviceUser.js";

/**
 *
 * @param {DatabaseConnection} db
 */
export const usersModule = (db) => {
  const repository = new UsersRepository(db);
  const service = new UsersService(repository);
  const controller = new UserController(service);
  return usersRoutes(controller);
};
