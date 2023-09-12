import { createUserQuery } from "./queries/createUser.js";
import { deleteUserQuery } from "./queries/deleteUser.js";
import { findOneByEmailQuery } from "./queries/findOneByEmail.js";
import { findOneByUsernameQuery } from "./queries/findOneByUsername.js";
import { findOneUserQuery } from "./queries/findOneUser.js";
import { findUsers } from "./queries/findUsers.js";
import { updateUserQuery } from "./queries/updateUser.js";

export class UsersRepository {
  constructor(db) {
    this.db = db;
  }

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

  async findOne(userId) {
    return this.db.queryOne(findOneUserQuery, [userId]);
  }

  async findOneByEmail(email) {
    return this.db.queryOne(findOneByEmailQuery, [email]);
  }

  async findOneByUsername(username) {
    return this.db.queryOne(findOneByUsernameQuery, [username]);
  }

  async delete(userId) {
    return this.db.exec(deleteUserQuery, [userId]);
  }

  async update(id, { password }) {
    return this.db.exec(updateUserQuery, [password, id]);
  }
}
