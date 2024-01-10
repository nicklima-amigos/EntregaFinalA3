import { AuthController } from "./authController.js";
import { authRoutes } from "./authRoutes.js";
import { AuthService } from "./authService.js";

export const startAuthModule = (usersModule) => {
  const service = new AuthService(usersModule.service);
  const controller = new AuthController(service);
  const routes = authRoutes(controller);
  return {
    service,
    controller,
    routes,
  };
};
