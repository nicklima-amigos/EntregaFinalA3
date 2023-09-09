// @ts-check

import { PlatformsRepository } from "../platform/platformRepository.js";
import "./dto/associateGamePlatformDto.js";
import "./dto/createGameDto.js";
import "./dto/disassociateGamePlatformDto.js";
import "./dto/updateGameDto.js";
import { GamesRepository } from "./gameRepository.js";
import { HttpError } from "../../exceptions/httpError.js";

export class GamesService {
  /**
   *
   * @param {GamesRepository} gameRepository
   * @param {PlatformsRepository} platformRepository
   */
  constructor(gameRepository, platformRepository) {
    this.gameRepository = gameRepository;
    this.platformRepository = platformRepository;
  }

  /**
   * @param {CreateGameDto} createGameDto
   * @returns
   */
  async create(createGameDto) {
    const existingGame = await this.gameRepository.findOneByTitle(
      createGameDto.title,
    );
    if (existingGame) {
      throw new HttpError(400, "Bad Request! Game already exists!");
    }
    const existingPlatform = await this.platformRepository.findOne(
      createGameDto.platform_id,
    );
    if (!existingPlatform) {
      throw new HttpError(404, "Platform not found!");
    }
  }

  /**
   *
   * @param {DisassociateGamePlatformDto} DisassociateGamePlatformDto
   * @returns
   */
  async disassociate({ game_id, platform_id }) {
    return this.gameRepository.disassociate({ game_id, platform_id });
  }

  async find() {
    return this.gameRepository.find();
  }

  /**
   *
   * @param {number} id
   */
  async findOne(id) {
    return this.gameRepository.findOne(id);
  }
  /**
   * @param {string} title
   */
  async findOneByTitle(title) {
    return this.gameRepository.findOneByTitle(title);
  }
  /**
   *
   * @param {number} id
   */
  async delete(id) {
    return this.gameRepository.delete(id);
  }

  /**
   *
   * @param {UpdateGameDto} updateGameDto
   * @returns
   */
  async update(updateGameDto) {
    return this.gameRepository.update(updateGameDto);
  }
}
