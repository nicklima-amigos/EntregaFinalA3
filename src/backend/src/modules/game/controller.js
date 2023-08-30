// @ts-check

import { GamesService } from './service.js';

export class GamesController {
  /**
   * @param {GamesService} service
   */
  constructor(service) {
    this.service = service;
    this.create = this.create.bind(this);
  }

  /**
   * @type {import('express').RequestHandler}
   */
  async create(req, res) {
    const gameDto = req.body;
    const createResult = this.service.create(gameDto);
    res.status(201).json(createResult);
    return;
  }
}
