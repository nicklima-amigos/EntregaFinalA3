import { HttpError } from "../../exceptions/httpError.js";

export class AuthService {
  constructor(userService) {
    this.userService = userService;
  }

  async signIn({ email, password }) {
    let user;
    try {
      user = await this.userService.findOneByEmail(email);
    } catch (e) {
      console.error(e);
      throw new HttpError(401, "invalid credentials");
    }
    if (password != user.password) {
      throw new HttpError(401, "invalid credentials");
    }
    return {
      token: "authorized",
      id: user.id,
      username: user.username,
      email: user.email,
      birthDate: user.birthDate,
    };
  }

  async authorize(token) {
    if (!token) {
      throw new HttpError(403, "forbidden");
    }
    return "ok";
  }
}
