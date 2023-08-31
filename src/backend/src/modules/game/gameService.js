// @ts-check

import "./dto/createGameDto.js";
import "./dto/updateGameDto.js";
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

  async find() {
    return this.repository.find();
  }

  /**
   *
   * @param {number} id
   */
  async findOne(id) {
    return this.repository.findOne(id);
  }

  /**
   *
   * @param {number} id
   */
  async delete(id) {
    return this.repository.delete(id);
  }

  /**
   *
   * @param {number} id
   * @param {UpdateGameDto} updateGameDto
   * @returns
   */
  async update(id, updateGameDto) {
    return this.repository.update(id, updateGameDto);
  }
}
