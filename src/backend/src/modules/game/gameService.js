// @ts-check

import "./dto/createGameDto.js";
import { GamesRepository } from "./gameRepository.js";

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
   * @returns
   */
  async create({ title, genre, price, developed_by, release_date }) {
    return this.repository.create({
      title,
      genre,
      price,
      developed_by,
      release_date,
    });
  }

  async list() {
    return this.repository.list();
  }
}
