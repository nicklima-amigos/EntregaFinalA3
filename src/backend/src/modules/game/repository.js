// @ts-check

import { createGameQuery } from '../../infrastructure/database/queries/games/create.js';
import { DatabaseConnector } from '../../infrastructure/database/connector.js';
export class GamesRepository {
  /**
   * @constructor
   * @param {DatabaseConnector} db
   */
  constructor(db) {
    this.db = db;
  }
  /**
   * @param {CreateGameDto} createGameDto
   */
  create({ title, genre, price, developed_by, release_date }) {
    this.db.exec(
      createGameQuery,
      [title, genre, price, developed_by, release_date],
      (err) => {
        if (err) {
          throw err;
        }
      }
    );
  }
}
