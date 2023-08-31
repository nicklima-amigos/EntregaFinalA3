// @ts-check

import "./dto/createUserDto.js";
import { UsersRepository } from "./userRepository.js";

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

  async get(userId) {

    return this.repository.get(userId);
  }
}
