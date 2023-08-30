// @ts-check

import { DatabaseConnector } from '../../infrastructure/database/connector.js';
import { GamesRepository } from './repository.js';

/**
 *
 * @param {DatabaseConnector} db
 */
export const gamesModule = (db) => {
  const repository = new GamesRepository(db);
};
