// @ts-check

import './dto/createPlatformDto.js';
import './dto/findOnePlatformDto.js';
import './dto/updatePlatformDto.js';
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
    /**
     * @type {CreatePlatformDto}
     */
    const platformDto = req.body;
    const result = await this.service.create(platformDto);
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
  * @type { import('express').RequestHandler}
  */
  async findOne(req, res, next) {

    /**
* @param {FindOnePlatformDto} req.params
*/
    const { id } = req.params;

    const result = await this.service.findOne({ id: Number(id) });
    if (!result) {
      res.status(404).json({ message: 'Not found!' });
      return;
    }
    res.status(200).json(result);
  }

  /**
 * @type { import('express').RequestHandler}
 */
  async update(req, res, next) {
    /**
 * @param {FindOnePlatformDto} req.params
 */
    const { id } = req.params;
    /**
  * @type {UpdatePlatformDto}
  */
    const { name } = req.body;

    const result = await this.service.update({ id: Number(id), name });
    if (!result) {
      res.status(404).json({ message: 'Not found!' });
      return;
    }
    if (result.name === name) {
      res.status(400).json({
        message: "Bad Request! You cannot change the platform name to the same name!"
      });
      return;
    }
    res.status(200).json(result);
  }

  /**
* @type { import('express').RequestHandler}
*/
  async delete(req, res, next) {

    /**
* @param {FindOnePlatformDto} req.params
*/
    const { id } = req.params;

    const result = await this.service.delete({ id: Number(id) });
    if (!result) {
      res.status(404).json({ message: 'Not found!' });
      return;
    }
    res.status(204).send();
  }
}
