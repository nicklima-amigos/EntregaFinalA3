// @ts-check
import "./dto/findOnePlatformDto.js";
import "./dto/platformDetailDto.js";
import "./dto/createPlatformDto.js";
import "./dto/updatePlatformDto.js";
import { DatabaseConnection } from "../../infrastructure/database/connection.js";
import { createPlatformQuery } from "./queries/createPlatform.js";
import { findPlatformsQuery } from "./queries/findPlatforms.js";
import { findOnePlatformQuery } from "./queries/findOnePlatform.js";
import { updatePlatformQuery } from "./queries/updatePlatform.js";
import { deletePlatformQuery } from "./queries/deletePlatform.js";
import { findOnePlatformByNameQuery } from "./queries/findOnePlatformByName.js";
import Game from "../game/gameModel.js";
import { createGamePlatformQuery } from "../common/queries/createGamePlatform.js";
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
    const rows = await this.db.query(findOnePlatformQuery, [id]);
    const { name } = rows[0];
    return {
      id,
      name,
      games: rows.map(
        (r) =>
          new Game({
            id: r.id,
            title: r.title,
            genre: r.genre,
            price: r.price,
            developed_by: r.developed_by,
            release_date: r.release_date,
          }),
      ),
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
