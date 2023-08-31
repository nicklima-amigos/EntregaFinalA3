import "./dto/createUserDto"
import { UserService } from "./serviceUser.js"

export class UserController {
  /**
   * @param { UserService } service
   */
  constructor() {
    this.service = service;
  }

  /**
 * @type {import('express').RequestHandler}
 */
  async create(req, res, next) {
    /**
     * @type {CreateUserDto}
     */
    const userDto = req.body;
    const result = await this.service.create(userDto);
    res.status(201).json(result);
  }

  /**
   * @type {import('express').RequestHandler}
   */
  async list(req, res, next) {
    const result = await this.service.list();
    res.status(200).json(result);
  }
}