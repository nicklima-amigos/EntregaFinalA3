// @ts-check

import "./dto/createCategoryDto.js";
import "./dto/findOneCategoryDto.js";
import "./dto/updateCategoryDto.js";
import {CategoriesService} from './categoryService.js';

export class CategoriesController {
  /**
   *
   * @param {CategoriesService} service
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
       * @type {CreateCategoryDto}
       */
      const categoryDto = req.body;
      console.log('categoryDto', categoryDto)
      const result = await this.service.create(categoryDto);
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
       * @param {FindOneCategoryDto} req.params
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
       * @param {FindOneCategoryDto} req.params
       */
      const { id } = req.params;
      /**
       * @type {UpdateCategoryDto}
       */
      const { category } = req.body;
      const result = await this.service.update({ id: Number(id), category });
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
       * @param {FindOneCategoryDto} req.params
       */
      const { id } = req.params;
      const result = await this.service.delete(Number(id));
      res.status(204).send(result);
    } catch (err) {
      next(err);
    }
  }
}
