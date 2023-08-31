// @ts-check

import "./dto/createGameDto.js";
import { UsersRepository } from "./repositoryUser.js";

export class GamesService {
  /**
   *
   * @param {UsersRepository} repository
   */
  constructor(repository) {
    this.repository = repository;
  }

  /**
   *
   * @param {CreateUserDto} createUserDto
   * @returns
   */
  async create({ username, email, password, birth_date }) {
    return this.repository.create({
      username,
      email,
      password,
      birth_date
    });
  }

  async list() {
    return this.repository.list();
  }
}
