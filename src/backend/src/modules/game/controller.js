// @ts-check

import { GamesService } from './service.js';

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
    const gameDto = req.body;
    const result = this.service.create(gameDto);
    res.status(201).json(result);
  }
}
