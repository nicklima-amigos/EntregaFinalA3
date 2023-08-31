// @ts-check

import "./dto/createGameDto.js";
import "./dto/updateGameDto.js";
import { createGameQuery } from "../../infrastructure/database/queries/games/createGame.js";
import { DatabaseConnection } from "../../infrastructure/database/connection.js";
import { listGames } from "../../infrastructure/database/queries/games/findGames.js";
import { findOneGameQuery } from "../../infrastructure/database/queries/games/findOneGame.js";
import { deleteGameQuery } from "../../infrastructure/database/queries/games/deleteGame.js";
import { updateGameQuery } from "../../infrastructure/database/queries/games/updateGame.js";
export class GamesRepository {
  /**
   * @constructor
   * @param {DatabaseConnection} db
   */
  constructor(db) {
    this.db = db;
  }

  /**
   * @param {CreateGameDto} createGameDto
   */
  async create({ title, genre, price, developed_by, release_date }) {
    return this.db.exec(createGameQuery, [
      title,
      genre,
      price,
      developed_by,
      release_date,
    ]);
  }

  async find() {
    return this.db.query(listGames);
  }

  /**
   *
   * @param {number} id
   */
  async findOne(id) {
    return this.db.query(findOneGameQuery, [id]);
  }

  async delete(id) {
    return this.db.exec(deleteGameQuery, [id]);
  }

  /**
   *
   * @param {number} id
   * @param {UpdateGameDto} param1
   * @returns
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
