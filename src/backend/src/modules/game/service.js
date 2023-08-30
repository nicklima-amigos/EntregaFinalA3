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

  create({ title, genre, price, developed_by, release_date }) {
    return this.repository.create({
      title,
      genre,
      price,
      developed_by,
      release_date,
    });
  }
}
