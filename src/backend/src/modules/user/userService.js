// @ts-check

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
   * @param {import("../../types/user/createUserDto.js").CreateUserDto} createUserDto
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
   * @param {import("../../types/user/updateUserDto.js").UpdateUserDto} updateUserDto
   * @returns
   */
  async update(updateUserDto) {
    return this.repository.update(updateUserDto);
  }
}
