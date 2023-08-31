// @ts-check

import "./dto/createGameDto.js";
import { createGameQuery } from "../../infrastructure/database/queries/games/createGame.js";
import { DatabaseConnection } from "../../infrastructure/database/connection.js";
import { listGames } from "../../infrastructure/database/queries/games/list.js";
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

  async list() {
    return this.db.query(listGames);
  }
}
