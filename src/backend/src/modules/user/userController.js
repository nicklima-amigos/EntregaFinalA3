// @ts-check
import "./dto/createUserDto.js"
import { UsersService } from "./serviceUser.js"

export class UserController {
  /**
   * @param { UsersService } service
   */
  constructor(service) {
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
  /**
   *
   * @type {import('express').RequestHandler}
   */

  async show(req, res, next) {

    const userId = req.params;
    const result = await this.service.show(userId);

    res.status(200).json(result);
  }
}