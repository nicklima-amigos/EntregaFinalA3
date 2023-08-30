// @ts-check

import { GamesRepository } from './repository.js';

export class GamesService {
  /**
   *
   * @param {GamesRepository} repository
   */
  constructor(repository) {
    this.repository = repository;
  }

  async create(gameDto) {
    return this.repository.create(gameDto);
  }
}
