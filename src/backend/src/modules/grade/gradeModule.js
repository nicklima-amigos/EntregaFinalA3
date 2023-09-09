// @ts-check

import { DatabaseConnection } from "../../infrastructure/database/connection.js";
import { GamesRepository } from "../game/gameRepository.js";
import { UsersRepository } from "../user/userRepository.js";
import { GradesController } from "./gradeController.js";
import { GradesRepository } from "./gradeRepository.js";
import { gradesRoutes } from "./gradeRoutes.js";
import { GradesService } from "./gradeService.js";

/**
 *
 * @param {DatabaseConnection} db
 */
export const gradesModule = (db) => {
  const gradesRepository = new GradesRepository(db);
  const usersRepository = new UsersRepository(db);
  const gamesRepository = new GamesRepository(db);
  const service = new GradesService(
    gradesRepository,
    usersRepository,
    gamesRepository,
  );
  const controller = new GradesController(service);
  return gradesRoutes(controller);
};
