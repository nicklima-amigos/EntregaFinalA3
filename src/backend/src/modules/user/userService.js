// @ts-check

import { HttpError } from "../../exceptions/httpError.js";
import "./dto/createUserDto.js";
import "./dto/updateUserDto.js";
import { UsersRepository } from "./userRepository.js";
import User from "./userModel.js";

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
   */
  async findOne(userId) {
    const user = await this.repository.findOne(userId);
    if (!user) {
      throw new HttpError(404, "User not found!");
    }
    return user;
  }

  async findOneByEmail(email) {}

  async findOneByUsername(username) {}

  /**
   *
   * @param {number} userId
   */
  async delete(userId) {
    await this.findOne(userId);
    return this.repository.delete(userId);
  }

  /**
   *
   * @param {UpdateUserDto} updateUserDto
   */
  async update(updateUserDto) {
    await this.findOne(updateUserDto.id);
    return this.repository.update(updateUserDto);
  }
}
