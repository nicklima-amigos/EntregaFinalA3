import { UserController } from "./userController.js";
import { UsersRepository } from "./userRepository.js";
import { usersRoutes } from "./userRoutes.js";
import { UsersService } from "./userService.js";

export const startUsersModule = (db) => {
  const repository = new UsersRepository(db);
  const service = new UsersService(repository);
  const controller = new UserController(service);
  const routes = usersRoutes(controller);
  return {
    repository,
    service,
    controller,
    routes,
  };
};
