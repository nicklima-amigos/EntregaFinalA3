// @ts-check

import "./dto/createUserDto.js";
import { createUserQuery } from "../../infrastructure/database/queries/users/createUser.js";
import { DatabaseConnection } from "../../infrastructure/database/connection.js";
import { findUsers } from "../../infrastructure/database/queries/users/findUsers.js";
import { findOneUserQuery } from "../../infrastructure/database/queries/users/findOneUser.js";

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
   * @returns
   */
  async findOne(userId) {
    return this.db.query(findOneUserQuery, [userId]);
  }
}
