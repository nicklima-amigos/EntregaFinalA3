// @ts-check
import "./dto/createUserDto.js";
import "./dto/updateUserDto.js";
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
    try {
      /**
       * @type {import("../../types/user/createUserDto.js").CreateUserDto}
       */
      const userDto = req.body;
      const result = await this.service.create(userDto);
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  }

  /**
   * @type {import('express').RequestHandler}
   */
  async find(req, res, next) {
    try {
      const result = await this.service.find();
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  /**
   *
   * @type {import('express').RequestHandler}
   */
  async findOne(req, res, next) {
    try {
      const { id } = req.params;
      const result = await this.service.findOne(+id);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  /**
   * @type {import('express').RequestHandler}
   */
  async delete(req, res, next) {
    try {
      const { id } = req.params;
      const result = await this.service.delete(+id);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  /**
   * @type {import('express').RequestHandler}
   */
  async update(req, res, next) {
    try {
      const { id } = req.params;
      /**
       * @type {import("../../types/user/updateUserDto.js").UpdateUserDto}
       */
      const userDto = req.body;
      const result = await this.service.update(+id, userDto);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}
