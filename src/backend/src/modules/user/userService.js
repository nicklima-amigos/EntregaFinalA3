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
      birth_date,
    });
  }

  async find() {
    return this.repository.find();
  }

  /**
   *
   * @param {number} userId
   * @returns
   */
  async findOne(userId) {
    return this.repository.findOne(userId);
  }
}
