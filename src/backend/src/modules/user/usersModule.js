import { UserController } from "./userController.js";
import { UsersRepository } from "./userRepository.js";
import { usersRoutes } from "./userRoutes.js";
import { UsersService } from "./userService.js";

export const usersModule = (db) => {
  const repository = new UsersRepository(db);
  const service = new UsersService(repository);
  const controller = new UserController(service);
  return usersRoutes(controller);
};
