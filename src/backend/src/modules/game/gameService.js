// @ts-check

import { PlatformsRepository } from "../platform/platformRepository.js";
import "./dto/associateGamePlatformDto.js";
import "./dto/createGameDto.js";
import "./dto/disassociateGamePlatformDto.js";
import "./dto/updateGameDto.js";
import { GamesRepository } from "./gameRepository.js";
import { HttpError } from "../../exceptions/httpError.js";
import Game from "./gameModel.js";

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

  async find() {
    return this.gameRepository.find();
  }

  /**
   *
   * @param {number} id
   * @returns {Promise<Game>}
   */
  async findOne(id) {
    const game = await this.gameRepository.findOne(id);
    if (!game) {
      throw new HttpError(404, "Game not found!");
    }
    return game;
  }

  /**
   * @param {string} title
   */
  async findOneByTitle(title) {
    const game = await this.gameRepository.findOneByTitle(title);
    if (!game) {
      throw new HttpError(404, "Game not found!");
    }
    return game;
  }
  /**
   *
   * @param {number} id
   */
  async delete(id) {
    await this.findOne(id);
    return this.gameRepository.delete(id);
  }

  /**
   *
   * @param {UpdateGameDto} updateGameDto
   * @returns
   */
  async update(updateGameDto) {
    const game = await this.findOne(updateGameDto.id);
    if (game.title === updateGameDto.title) {
      throw new HttpError(404, "A game with this title already exists!");
    }
    return this.gameRepository.update(updateGameDto);
  }
}
