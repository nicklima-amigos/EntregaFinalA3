import { PlatformsRepository } from "../platform/platformRepository.js";
import { GamesController } from "./gameController.js";
import { GamesRepository } from "./gameRepository.js";
import { gamesRoutes } from "./gameRoutes.js";
import { GamesService } from "./gameService.js";
import { ImageCrawlerService } from "./imageCrawlerService.js";

export const gamesModule = (db) => {
  const gamesRepository = new GamesRepository(db);
  const platformsRepository = new PlatformsRepository(db);
  const imageCrawlerService = new ImageCrawlerService();
  const service = new GamesService(
    gamesRepository,
    platformsRepository,
    imageCrawlerService,
  );
  const controller = new GamesController(service);
  return gamesRoutes(controller);
};
