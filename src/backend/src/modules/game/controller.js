// @ts-check

import "./dto/createGameDto.js";
import { GamesService } from "./service.js";

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
  create(req, res, next) {
    /**
     * @type {CreateGameDto}
     */
    const gameDto = req.body;
    this.service.create(gameDto, (err) => {
      if (err) {
        return next(err);
      }

      res.status(201).json({ message: "created" });
    });
  }
}
