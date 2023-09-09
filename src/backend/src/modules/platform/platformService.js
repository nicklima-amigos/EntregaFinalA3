// @ts-check
import Platform from "./platformModel.js";
import { PlatformsRepository } from "./platformRepository.js";
import "./dto/createPlatformDto.js";
import "./dto/findOnePlatformDto.js";
<<<<<<< HEAD
import { HttpError } from "@exceptions/httpError.js";
=======
import { HttpError } from "../../exceptions/httpError.js";
import { GamesRepository } from "../game/gameRepository.js";
>>>>>>> dev
export class PlatformsService {
  /**
   *
   * @param {PlatformsRepository} repository
   * @param {GamesRepository} gamesRepository
   */
  constructor(repository, gamesRepository) {
    this.repository = repository;
    this.gamesRepository = gamesRepository;
  }

  /**
   *
   * @param {CreatePlatformDto} CreatePlatformDto
   * @returns
   */
  async create({ name }) {
    await this.repository.findOneByName(name);
    return this.repository.create({
      name,
    });
  }

  /**
   *
   * @param {number} id
   * @param {number} gameId
   * @returns
   */
  async addGame(id, gameId) {
    await this.repository.findOne(id);
    const game = await this.gamesRepository.findOne(gameId);
    if (!game) {
      throw new HttpError(404, "Game not found!");
    }
    return this.repository.addGame(id, gameId);
  }

  /**
   * @returns {Promise<Platform[]>}
   */
  async find() {
    return this.repository.find();
  }

  /**
   * @param {number} id
   */
  async findOne(id) {
    const platform = await this.repository.findOne(id);
    if (!platform) {
      throw new HttpError(404, "Not found!");
    }
    return platform;
  }

  /**
   * @param {string} name
   */
  async findOneByName(name) {
    const platform = await this.repository.findOneByName(name);
    if (!platform) {
      throw new HttpError(404, "Not found!");
    }
    return platform;
  }

  /**
   * @param {number} id
   * @param {UpdatePlatformDto} UpdatePlatformDto
   */
  async update(id, { name }) {
    const foundPlatform = await this.findOne(id);
    if (foundPlatform.name === name) {
      throw new HttpError(
        404,
        "Bad Request! A platform with this name already exists!",
      );
    }
    return await this.repository.update(id, { name });
  }

  /**
   * @param {number} id
   */
  async delete(id) {
    await this.findOne(id);
    return this.repository.delete(id);
  }
}
