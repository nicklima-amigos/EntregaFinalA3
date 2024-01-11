import { GradesController } from "./gradeController.js";
import { GradesRepository } from "./gradeRepository.js";
import { gradesRoutes } from "./gradeRoutes.js";
import { GradesService } from "./gradeService.js";

export const startGradesModule = (db, usersModule, gamesModule) => {
  const repository = new GradesRepository(db);
  const service = new GradesService(
    repository,
    usersModule.repository,
    gamesModule.repository,
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
