// @ts-check

import "./dto/createGameDto.js";
import { GamesService } from "./gameService.js";

export class GamesController {
  /**
   *
   * @param {GamesService} service
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
   * @param {FindOnePlatformDto} req.params
   */
      const { id } = req.params;
      /**
         * @type {CreateGameDto}
       */
      const gameDto = req.body;
      const result = await this.service.create(Number(id), gameDto);
      res.status(201).json(result);
    } catch (err) {
      next(err);
    }
  }

  /**
   * @type {import('express').RequestHandler}
   */
  async find(req, res, next) {
    try {
      const result = await this.service.find();
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }

  /**
   * @type {import('express').RequestHandler}
   */
  async findOne(req, res, next) {
    try {
      const { id } = req.params;
      const result = await this.service.findOne(+id);
      res.status(200).json(result);
    } catch (err) {
      next(err);
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
    } catch (err) {
      next(err);
    }
  }

  /**
   * @type {import('express').RequestHandler}
   */
  async update(req, res, next) {
    try {
      const { id } = req.params;
      const gameDto = req.body;
      const result = await this.service.update(+id, gameDto);
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }
}
