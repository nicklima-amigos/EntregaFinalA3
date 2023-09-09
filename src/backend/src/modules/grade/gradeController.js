// @ts-check

import { GradesService } from "./gradeService.js";

export class GradesController {
  /**
   * @param {GradesService} service
   */
  constructor(service) {
    this.service = service;
  }

  /**
   * @type {import('express').RequestHandler}
   */
  async find(req, res, next) {
    try {
      const grades = await this.service.find();
      res.json(grades);
    } catch (error) {
      next(error);
    }
  }

  /**
   * @type {import('express').RequestHandler}
   */
  async findOne(req, res, next) {
    try {
      const { id } = req.params;

      const grade = await this.service.findOne(+id);
      res.json(grade);
    } catch (error) {
      next(error);
    }
  }

  /**
   * @type {import('express').RequestHandler}
   */
  async findGradesByUser(req, res, next) {
    try {
      const { userId } = req.params;
      const grades = await this.service.findGradesByUser(+userId);
      res.json(grades);
    } catch (error) {
      next(error);
    }
  }

  /**
   * @type {import('express').RequestHandler}
   */
  async create(req, res, next) {
    try {
      const grade = await this.service.create(req.body);
      res.json(grade);
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
      const grade = await this.service.update(+id, req.body);
      res.json(grade);
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
      const grade = await this.service.delete(+id);
      res.json(grade);
    } catch (error) {
      next(error);
    }
  }
}
