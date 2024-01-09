import { GradesController } from "./gradeController.js";
import { GradesRepository } from "./gradeRepository.js";
import { gradesRoutes } from "./gradeRoutes.js";
import { GradesService } from "./gradeService.js";

export const startGradesModule = (db, usersRepository, gamesRepository) => {
  const repository = new GradesRepository(db);
  const service = new GradesService(
    repository,
    usersRepository,
    gamesRepository,
  );
  const controller = new GradesController(service);
  const routes = gradesRoutes(controller);
  return {
    repository,
    service,
    controller,
    routes,
  };
};
