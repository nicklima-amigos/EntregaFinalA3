// @ts-check

import { HttpError } from "../../exceptions/httpError.js";
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
   * @param {CreateUserDto} createUserDto
   */
  async create({ username, email, password, birth_date }) {
    let existingUser = await this.repository.findOneByEmail(email);
    if (existingUser) {
      throw new HttpError(400, "Bad Request! User already exists!");
    }
    existingUser = await this.repository.findOneByUsername(username);
    if (existingUser) {
      throw new HttpError(400, "Bad Request! User already exists!");
    }
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
   * @param {number} userId
   */
  async findOne(userId) {
    const user = await this.repository.findOne(userId);
    if (!user) {
      throw new HttpError(404, "User not found!");
    }
    return user;
  }

  /**
   *
   * @param {string} email
   * @returns
   */
  async findOneByEmail(email) {
    const user = await this.repository.findOneByEmail(email);
    if (!user) {
      throw new HttpError(404, "User not found!");
    }
    return user;
  }

  /**
   *
   * @param {string} username
   * @returns
   */
  async findOneByUsername(username) {
    const user = await this.repository.findOneByUsername(username);
    if (!user) {
      throw new HttpError(404, "User not found!");
    }
    return user;
  }

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
