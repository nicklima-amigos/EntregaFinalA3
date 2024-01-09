import { GamesController } from "./gameController.js";
import { GamesRepository } from "./gameRepository.js";
import { gamesRoutes } from "./gameRoutes.js";
import { GamesService } from "./gameService.js";
import { ImageCrawlerService } from "./imageCrawlerService.js";

export const startGamesModule = (db, platformsRepository) => {
  const repository = new GamesRepository(db);
  const imageCrawlerService = new ImageCrawlerService();
  const service = new GamesService(
    repository,
    platformsRepository,
    imageCrawlerService,
  );
  const controller = new GamesController(service);
  const routes = gamesRoutes(controller);
  return {
    repository,
    imageCrawlerService,
    service,
    controller,
    routes,
  };
};
