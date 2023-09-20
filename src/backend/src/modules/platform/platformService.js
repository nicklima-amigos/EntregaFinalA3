import { HttpError } from "../../exceptions/httpError.js";
export class PlatformsService {
  constructor(repository, gamesRepository) {
    this.repository = repository;
    this.gamesRepository = gamesRepository;
  }

  async create({ name }) {
    await this.repository.findOneByName(name);
    return this.repository.create({
      name,
    });
  }

  async addGame(id, gameId) {
    await this.repository.findOne(id);
    const game = await this.gamesRepository.findOne(gameId);
    if (!game) {
      throw new HttpError(404, "Game not found!");
    }
    return this.repository.addGame(id, gameId);
  }

  find() {
    return this.repository.find();
  }

  async findOne(id) {
    const platform = await this.repository.findOne(id);
    if (!platform) {
      throw new HttpError(404, "Not found!");
    }
    return platform;
  }

  async findOneByName(name) {
    const platform = await this.repository.findOneByName(name);
    if (!platform) {
      throw new HttpError(404, "Not found!");
    }
    return platform;
  }

  async update(id, { name }) {
    const foundPlatform = await this.findOne(id);
    if (foundPlatform.name === name) {
      throw new HttpError(
        409,
        "Bad Request! A platform with this name already exists!",
      );
    }
    return await this.repository.update(id, { name });
  }

  async delete(id) {
    await this.findOne(id);
    return this.repository.delete(id);
  }
}
