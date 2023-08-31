// @ts-check

import "./dto/createUserDto.js";
import { UsersRepository } from "./repositoryUser.js";

export class UsersService {
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

  async show(userId) {

    return this.repository.show(userId);
  }
}
