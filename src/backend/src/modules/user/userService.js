import { HttpError } from "../../exceptions/httpError.js";

export class UsersService {
  constructor(repository) {
    this.repository = repository;
  }

  async create({ username, email, password, birth_date }) {
    let existingUser = await this.repository.findOneByEmail(email);
    if (existingUser) {
      throw new HttpError(409, "Bad Request! User already exists!");
    }
    existingUser = await this.repository.findOneByUsername(username);
    if (existingUser) {
      throw new HttpError(409, "Bad Request! User already exists!");
    }
    return this.repository.create({
      username,
      email,
      password,
      birth_date,
    });
  }

  async find() {
    const users = await this.repository.find();
    users.forEach((user) => delete user.password);
    return users;
  }

  async findOne(userId) {
    const user = await this.repository.findOne(userId);
    if (!user) {
      throw new HttpError(404, "User not found!");
    }
    delete user.password;
    return user;
  }

  async findOneByEmail(email) {
    const user = await this.repository.findOneByEmail(email);
    if (!user) {
      throw new HttpError(404, "User not found!");
    }
    delete user.password;
    return user;
  }

  async findOneByUsername(username) {
    const user = await this.repository.findOneByUsername(username);
    if (!user) {
      throw new HttpError(404, "User not found!");
    }
    delete user.password;
    return user;
  }

  async delete(userId) {
    await this.findOne(userId);
    return this.repository.delete(userId);
  }

  async update(id, updateUserDto) {
    await this.findOne(id);
    return this.repository.update(id, updateUserDto);
  }
}
