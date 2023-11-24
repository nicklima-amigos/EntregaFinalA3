import { HttpError } from "../../exceptions/httpError.js";

export class GamesService {
  constructor(gameRepository, platformRepository, imageCrawlerService) {
    this.gameRepository = gameRepository;
    this.platformRepository = platformRepository;
    this.imageCrawlerService = imageCrawlerService;
  }

  async create({ title, genre, price, developed_by, release_date }) {
    const existingGame = await this.gameRepository.findOneByTitle(title);
    if (existingGame) {
      throw new HttpError(409, "Bad Request! Game already exists!");
    }
    const imageUrl = await this.imageCrawlerService.run(title);
    return this.gameRepository.create({
      title,
      genre,
      price,
      developed_by,
      release_date,
      image: imageUrl,
    });
  }

  find() {
    return this.gameRepository.find();
  }

  findByPlatform(platformId) {
    return this.gameRepository.findByPlatform(platformId);
  }

  async findOne(id) {
    const game = await this.gameRepository.findOne(id);
    if (!game) {
      throw new HttpError(404, "Game not found!");
    }
    return game;
  }

  async findGamePlatforms(gameId) {
    const game = await this.gameRepository.findOne(gameId);
    if (!game) {
      throw new HttpError(404, "Game not found!");
    }
    return this.gameRepository.findGamePlatforms(gameId);
  }

  async findOneByTitle(title) {
    const game = await this.gameRepository.findOneByTitle(title);
    if (!game) {
      throw new HttpError(404, "Game not found!");
    }
    return game;
  }

  async delete(id) {
    await this.findOne(id);
    return this.gameRepository.delete(id);
  }

  async update(id, title) {
    const game = await this.findOne(id);
    if (game.title === title) {
      throw new HttpError(404, "A game with this title already exists!");
    }
    return this.gameRepository.update(id, title);
  }

  async associatePlatform({ gameId, platformId }) {
    const existingGame = await this.gameRepository.findOne(gameId);
    if (!existingGame) {
      throw new HttpError(404, "Game not found!");
    }
    const existingPlatform = await this.platformRepository.findOne(platformId);
    if (!existingPlatform) {
      throw new HttpError(404, "Platform not found!");
    }
    return this.gameRepository.associate({ gameId, platformId });
  }

  async dissociatePlatform({ gameId, platformId }) {
    const existingGame = await this.gameRepository.findOne(gameId);
    if (!existingGame) {
      throw new HttpError(404, "Game not found!");
    }
    const existingPlatform = await this.platformRepository.findOne(platformId);
    if (!existingPlatform) {
      throw new HttpError(404, "Platform not found!");
    }
    return this.gameRepository.dissociate({ gameId, platformId });
  }
}
