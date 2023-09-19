import { HttpError } from "../../exceptions/httpError.js";

export class AuthService {
  constructor(userService) {
    this.userService = userService;
  }

  async signIn({ username, password }) {
    let user;
    try {
      user = await this.userService.findOneByUsername(username);
    } catch (e) {
      throw new HttpError(401, "invalid credentials");
    }
    if (password != user.password) {
      throw new HttpError(401, "invalid credentials");
    }
    return { token: "authorized" };
  }

  async signUp({ username, email, birthDate, password }) {
    return this.userService.create({
      username,
      email,
      birthDate,
      password,
    });
  }

  async authorize({ token }) {
    if (!token) {
      throw new HttpError(403, "forbidden");
    }
    return "ok";
  }
}
