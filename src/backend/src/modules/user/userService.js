// @ts-check

import "./dto/createUserDto.js";
import "./dto/updateUserDto.js";
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

  /**
  *
  * @param {number} userId
  * @returns
  */
  async delete(userId) {
    return this.repository.delete(userId);
  }

  /**
   *
   * @param {number} userId
   * @param {UpdateUserDto} updateUserDto
   * @returns
   */
  async update(userId, updateUserDto) {
    return this.repository.update(userId, updateUserDto);
  }
}
