import { UsersRepository } from "../user/userRepository.js";
import { UsersService } from "../user/userService.js";
import { AuthController } from "./authController.js";
import { authRoutes } from "./authRoutes.js";
import { AuthService } from "./authService.js";

export const authModule = (db) => {
  const userRepository = new UsersRepository(db);
  const userService = new UsersService(userRepository);
  const authService = new AuthService(userService);
  const authController = new AuthController(authService);
  return authRoutes(authController);
};
