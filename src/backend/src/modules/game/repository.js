// @ts-check

import "./dto/createGameDto.js";
import { createGameQuery } from "../../infrastructure/database/queries/games/create.js";
import { DatabasConnection } from "../../infrastructure/database/connector.js";
export class GamesRepository {
  /**
   * @constructor
   * @param {DatabasConnection} db
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

  async list() {
    return this.db.query("SELECT * FROM games");
  }
}
