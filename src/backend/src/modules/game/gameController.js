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
    /**
     * @type {CreateGameDto}
     */
    const gameDto = req.body;
    const result = await this.service.create(gameDto);
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
