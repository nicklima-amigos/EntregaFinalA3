export class AuthController {
  constructor(authService) {
    this.authService = authService;
  }

  async signUp(req, res, next) {
    try {
      const result = await this.authService.signUp(req.body);
      res.status(201).json(result);
    } catch (e) {
      next(e);
    }
  }

  async signIn(req, res, next) {
    try {
      const result = await this.authService.signIn(req.body);
      res.status(200).json(result);
    } catch (e) {
      next(e);
    }
  }

  async authorize(req, res, next) {
    try {
      const result = await this.authService.authorize(req.body);
      return res.status(200).json(result);
    } catch (e) {
      next(e);
    }
  }
}
