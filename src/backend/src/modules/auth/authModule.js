import { AuthController } from "./authController.js";
import { authRoutes } from "./authRoutes.js";
import { AuthService } from "./authService.js";

export const startAuthModule = (userService) => {
  const service = new AuthService(userService);
  const controller = new AuthController(service);
  const routes = authRoutes(controller);
  return {
    service,
    controller,
    routes,
  };
};
