// @ts-check

import "./dto/createGameDto";
import { GamesRepository } from "./repository.js";

export class GamesService {
  /**
   *
   * @param {GamesRepository} repository
   */
  constructor(repository) {
    this.repository = repository;
  }

  /**
   *
   * @param {CreateGameDto} createGameDto
   * @param {*} callback
   * @returns
   */
  create({ title, genre, price, developed_by, release_date }, callback) {
    return this.repository.create(
      {
        title,
        genre,
        price,
        developed_by,
        release_date,
      },
      callback,
    );
  }
}
