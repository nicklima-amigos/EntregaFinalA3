import databaseConnector from '../../infrastructure/database/connector.js';
import { createGameQuery } from '../../infrastructure/database/queries/games/create.js';

export class GamesRepository {
  constructor() {}

  /**
   *
   * @param {CreateGameDto} createGameDto
   */
  async create({ title, genre, price, developed_by, release_date }) {
    databaseConnector.exec(
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
