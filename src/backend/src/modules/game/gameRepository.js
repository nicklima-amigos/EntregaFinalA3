// @ts-check

import "./dto/createGameDto.js";
import "./dto/updateGameDto.js";
import "./dto/associateGamePlatformDto.js";
import "./dto/disassociateGamePlatformDto.js";
import { createGameQuery } from "../../infrastructure/database/queries/games/createGame.js";
import { DatabaseConnection } from "../../infrastructure/database/connection.js";
import { listGames } from "../../infrastructure/database/queries/games/findGames.js";
import { findOneGameQuery } from "../../infrastructure/database/queries/games/findOneGame.js";
import { deleteGameQuery } from "../../infrastructure/database/queries/games/deleteGame.js";
import { updateGameQuery } from "../../infrastructure/database/queries/games/updateGame.js";
import { createGamePlatformQuery } from "../../infrastructure/database/queries/games_pĺatforms/createGamePlatform.js";
import { findOneGameByTitleQuery } from "../../infrastructure/database/queries/games/findOneGameByTitle.js";
import { deleteGamePlatformQuery } from "../../infrastructure/database/queries/games_pĺatforms/deleteGamePlatform.js";
import Game from "./gameModel.js";
export class GamesRepository {
  /**
   *
   * @constructor
   * @param {DatabaseConnection} db
   */
  constructor(db) {
    this.db = db;
  }

  /**
   *
   * @param {CreateGameDto} createGameDto
   */
  async create({
    title,
    genre,
    price,
    developed_by,
    release_date,
    platform_id,
  }) {
    const createGameResult = await this.db.exec(createGameQuery, [
      title,
      genre,
      price,
      developed_by,
      release_date,
    ]);
    await this.associate({
      game_id: createGameResult.id,
      platform_id,
    });
    return createGameResult;
  }

  /**
   *
   * @returns {Promise<Game[]>}
   */
  async find() {
    return this.db.query(listGames);
  }
  /**
   *
   * @param {AssociateGamePlatformDto} AssociateGamePlatformDto
   */
  async associate({ game_id, platform_id }) {
    return this.db.exec(createGamePlatformQuery, [game_id, platform_id]);
  }
  /**
   *
   * @param {DisassociateGamePlatformDto} DisassociateGamePlatformDto
   */
  async disassociate({ game_id, platform_id }) {
    return this.db.exec(deleteGamePlatformQuery, [game_id, platform_id]);
  }
  /**
   * @param {number} id
   * @returns {Promise<Game>}
   */
  async findOne(id) {
    return this.db.queryOne(findOneGameQuery, [id]);
  }
  /**
   * @param {string} title
   * @returns {Promise<Game>}
   */
  async findOneByTitle(title) {
    return this.db.queryOne(findOneGameByTitleQuery, [title]);
  }

  /**
   * @param {number} id
   */
  async delete(id) {
    return this.db.exec(deleteGameQuery, [id]);
  }

  /**
   * @param {number} id
   * @param {UpdateGameDto} updateGameDto
   */
  async update(id, { title, genre, price, developed_by, release_date }) {
    return this.db.exec(updateGameQuery, [
      title,
      genre,
      price,
      developed_by,
      release_date,
      id,
    ]);
  }
}
