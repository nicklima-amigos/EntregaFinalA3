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

  create({ username, email, password, birth_date }) {
    return this.db.exec(createUserQuery, [
      username,
      email,
      password,
      birth_date,
    ]);
  }

  find() {
    return this.db.query(findUsers);
  }

  findOne(userId) {
    return this.db.queryOne(findOneUserQuery, [userId]);
  }

  findOneByEmail(email) {
    return this.db.queryOne(findOneByEmailQuery, [email]);
  }

  findOneByUsername(username) {
    return this.db.queryOne(findOneByUsernameQuery, [username]);
  }

  delete(userId) {
    return this.db.exec(deleteUserQuery, [userId]);
  }

  update(id, { password }) {
    return this.db.exec(updateUserQuery, [password, id]);
  }
}
