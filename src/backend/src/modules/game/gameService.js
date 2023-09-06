// @ts-check

import { PlatformsRepository } from "../platform/platformRepository.js";
import "./dto/createGameDto.js";
import "./dto/updateGameDto.js";
import "./dto/associateGamePlatformDto.js";
import "./dto/disassociateGamePlatformDto.js";
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
    this.platformRepository = platformRepository
  }

  /**
   * @param {number} platform_id
   * @param {CreateGameDto} createGameDto
   * @returns
   */
  async create(platform_id, createGameDto) {
    const existingGame = await this.gameRepository.findOneByTitle(createGameDto.title);
    if (existingGame) {
      throw {
        status: 400,
        message: "Bad Request! Platform already exists!",
      };
    }
    const existingPlatform = await this.platformRepository.findOne(platform_id);
    if (!existingPlatform) {
      throw {
        status: 404,
        message: "Platform not found!",
      };
    }
    const result = await this.gameRepository.create(createGameDto);
    this.associate({ game_id: result.id, platform_id })
    return result
  }

  /**
   *
   * @param {AssociateGamePlatformDto} AssociateGamePlatformDto
   * @returns
   */
  async associate({ game_id, platform_id }) {
    return this.gameRepository.associate({ game_id, platform_id });
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
    return this.gameRepository.findOne(id)
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
   * @param {number} id
   * @param {UpdateGameDto} updateGameDto
   * @returns
   */
  async update(id, updateGameDto) {
    return this.gameRepository.update(id, updateGameDto);
  }
}
