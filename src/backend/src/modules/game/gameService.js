import { HttpError } from "../../exceptions/httpError.js";

export class GamesService {
  constructor(gameRepository, platformRepository) {
    this.gameRepository = gameRepository;
    this.platformRepository = platformRepository;
  }

  async create({ title, genre, price, developed_by, release_date }) {
    const existingGame = await this.gameRepository.findOneByTitle(
      createGameDto.title,
    );
    if (existingGame) {
      throw new HttpError(409, "Bad Request! Game already exists!");
    }
    const existingPlatform = await this.platformRepository.findOne(
      createGameDto.platform_id,
    );
    if (!existingPlatform) {
      throw new HttpError(404, "Platform not found!");
    }
    return this.gameRepository.create({
      title,
      genre,
      price,
      developed_by,
      release_date,
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

  async update(id, updateGameDto) {
    const game = await this.findOneByTitle(updateGameDto.title);
    if (game.title === updateGameDto.title) {
      throw new HttpError(404, "A game with this title already exists!");
    }
    return this.gameRepository.update(id, updateGameDto);
  }
}
