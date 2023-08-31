// @ts-check
import "./dto/createUserDto.js";
import { UsersService } from "./userService.js";

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
  async find(req, res, next) {
    const result = await this.service.find();
    res.status(200).json(result);
  }

  /**
   *
   * @type {import('express').RequestHandler}
   */
  async findOne(req, res, next) {
    const { id } = req.params;
    const result = await this.service.findOne(+id);
    res.status(200).json(result);
  }
}
