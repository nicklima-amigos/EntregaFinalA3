// @ts-check

import "./dto/createUserDto.js";
import "./dto/updateUserDto.js";
import { DatabaseConnection } from "../../infrastructure/database/connection.js";
import { createUserQuery } from "./queries/createUser.js";
import { deleteUserQuery } from "./queries/deleteUser.js";
import { findOneByEmailQuery } from "./queries/findOneByEmail.js";
import { findOneByUsernameQuery } from "./queries/findOneByUsername.js";
import { findOneUserQuery } from "./queries/findOneUser.js";
import { findUsers } from "./queries/findUsers.js";
import { updateUserQuery } from "./queries/updateUser.js";
import User from "./userModel.js";

export class UsersRepository {
  /**
   * @constructor
   * @param {DatabaseConnection} db
   */
  constructor(db) {
    this.db = db;
  }

  /**
   * @param {CreateUserDto} createUserDto
   */
  async create({ username, email, password, birth_date }) {
    return this.db.exec(createUserQuery, [
      username,
      email,
      password,
      birth_date,
    ]);
  }

  async find() {
    return this.db.query(findUsers);
  }

  /**
   *
   * @param {number} userId
   * @returns {Promise<User>}
   */
  async findOne(userId) {
    return this.db.queryOne(findOneUserQuery, [userId]);
  }

  /**
   *
   * @param {string} email
   * @returns {Promise<User>}
   */
  async findOneByEmail(email) {
    return this.db.queryOne(findOneByEmailQuery, [email]);
  }

  /*
   * @param {string} email
   * @returns {Promise<User>}
   * */
  async findOneByUsername(username) {
    return this.db.queryOne(findOneByUsernameQuery, [username]);
  }

  /**
   *
   * @param {number} userId
   */
  async delete(userId) {
    return this.db.exec(deleteUserQuery, [userId]);
  }

  /**
   * @param {number} id
   * @param {UpdateUserDto} param1
   */
  async update(id, { password }) {
    return this.db.exec(updateUserQuery, [password, id]);
  }
}
