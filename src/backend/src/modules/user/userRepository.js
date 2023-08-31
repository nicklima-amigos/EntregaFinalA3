// @ts-check

import "./dto/createUserDto.js";
import { createUserQuery } from "../../infrastructure/database/queries/users/createUser.js";
import { DatabaseConnection } from "../../infrastructure/database/connection.js";
import { listUsers } from "../../infrastructure/database/queries/users/listUser.js";

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
      birth_date
    ]);
  }

  async list() {
    return this.db.query(listUsers);
  }

  async show(userId) {

    return this.db.query(userId);
  }
}
