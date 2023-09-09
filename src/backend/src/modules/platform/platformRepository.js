// @ts-check
import "./dto/findOnePlatformDto.js";
import "./dto/createPlatformDto.js";
import "./dto/updatePlatformDto.js";
import { DatabaseConnection } from "../../infrastructure/database/connection.js";
import { createPlatformQuery } from "./queries/createPlatform.js";
import { findPlatformsQuery } from "./queries/findPlatforms.js";
import { findPlatformGamesQuery } from "./queries/findPlatformGames.js";
import { updatePlatformQuery } from "./queries/updatePlatform.js";
import { deletePlatformQuery } from "./queries/deletePlatform.js";
import { findOnePlatformByNameQuery } from "./queries/findOnePlatformByName.js";
import Game from "../game/gameModel.js";
import { createGamePlatformQuery } from "../common/queries/createGamePlatform.js";
import { findOnePlatformQuery } from "./queries/findOnePlatform.js";
export class PlatformsRepository {
  /**
   * @constructor
   * @param {DatabaseConnection} db
   */
  constructor(db) {
    this.db = db;
  }

  /**
   * @param {CreatePlatformDto} CreatePlatformDto
   */
  async create({ name }) {
    return await this.db.exec(createPlatformQuery, [name]);
  }

  /**
   *
   * @param {number} id
   * @param {number} gameId
   * @returns
   */
  async addGame(id, gameId) {
    const result = await this.db.exec(createGamePlatformQuery, [gameId, id]);
    return result;
  }

  async find() {
    return await this.db.query(findPlatformsQuery);
  }
  /**
   * @param {number} id
   * @returns {Promise<import("./dto/platformDetailDto.js").PlatformDetailDto>}
   */
  async findOne(id) {
    const platform = await this.db.queryOne(findOnePlatformQuery, [id]);
    const games = await this.db.query(findPlatformGamesQuery, [id]);
    return {
      ...platform,
      games: games.map((game) => new Game(game)),
    };
  }

  /**
   * @param {string} name
   */
  async findOneByName(name) {
    return this.db.queryOne(findOnePlatformByNameQuery, [name]);
  }

  /**
   * @param {number} id
   * @param {UpdatePlatformDto} UpdatePlatformDto
   */
  async update(id, { name }) {
    const result = await this.db.exec(updatePlatformQuery, [name, id]);
    return result;
  }

  /**
   * @param {number} id
   */
  async delete(id) {
    const result = this.db.query(deletePlatformQuery, [id]);
    return result;
  }
}
