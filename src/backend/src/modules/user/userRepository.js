// @ts-check

import { createUserQuery } from "../../infrastructure/database/queries/users/createUser.js";
import { DatabaseConnection } from "../../infrastructure/database/connection.js";
import { findUsers } from "../../infrastructure/database/queries/users/findUsers.js";
import { findOneUserQuery } from "../../infrastructure/database/queries/users/findOneUser.js";
import { deleteUserQuery } from "../../infrastructure/database/queries/users/deleteUser.js";
import { updateUserQuery } from "../../infrastructure/database/queries/users/updateUser.js";

export class UsersRepository {
  /**
   * @constructor
   * @param {DatabaseConnection} db
   */
  constructor(db) {
    this.db = db;
  }

  /**
   * @param {import("../../types/user/createUserDto.js").CreateUserDto} createUserDto
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

  /**
   *
   * @param {number} userId
   * @returns
   */
  async delete(userId) {
    return this.db.exec(deleteUserQuery, [userId]);
  }

  /**
   *
   * @param {import("../../types/user/updateUserDto.js").UpdateUserDto} param1
   * @returns
   */
  async update({ id, password }) {
    return this.db.exec(updateUserQuery, [password, id]);
  }
}
