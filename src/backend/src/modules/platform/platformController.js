// @ts-check

import "./dto/createPlatformDto.js";
import "./dto/findOnePlatformDto.js";
import "./dto/updatePlatformDto.js";
import { PlatformsService } from "./platformService.js";

export class PlatformsController {
  /**
   *
   * @param {PlatformsService} service
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
       * @type {CreatePlatformDto}
       */
      const platformDto = req.body;
      const result = await this.service.create(platformDto);
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
   * @type { import('express').RequestHandler}
   */
  async findOne(req, res, next) {
    try {
      /**
       * @param {FindOnePlatformDto} req.params
       */
      const { id } = req.params;

      const result = await this.service.findOne(Number(id));

      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }

  /**
   * @type { import('express').RequestHandler}
   */
  async update(req, res, next) {
    try {
      /**
       * @param {FindOnePlatformDto} req.params
       */
      const { id } = req.params;
      /**
       * @type {UpdatePlatformDto}
       */
      const { name } = req.body;

      const result = await this.service.update({ id: Number(id), name });
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }

  /**
   * @type { import('express').RequestHandler}
   */
  async delete(req, res, next) {
    try {
      /**
       * @param {FindOnePlatformDto} req.params
       */
      const { id } = req.params;
      const result = await this.service.delete(Number(id));
      res.status(204).send(result);
    } catch (err) {
      next(err);
    }
  }
}
