// @ts-check
import Platform from "./platformModel.js";
import { PlatformsRepository } from "./platformRepository.js";
import "./dto/createPlatformDto.js";
import "./dto/findOnePlatformDto.js";
import { HttpError } from "../../exceptions/httpError.js";
export class PlatformsService {
  /**
   *
   * @param {PlatformsRepository} repository
   */
  constructor(repository) {
    this.repository = repository;
  }

  /**
   *
   * @param {CreatePlatformDto} CreatePlatformDto
   * @returns
   */
  async create({ name }) {
    await this.repository.findOneByName(name);
    return this.repository.create({
      name,
    });
  }

  /**
   * @returns {Promise<Platform[]>}
   */
  async find() {
    return this.repository.find();
  }

  /**
   * @param {number} id
   */
  async findOne(id) {
    const platform = await this.repository.findOne(id);
    if (!platform) {
      throw new HttpError(404, "Not found!");
    }
    return platform;
  }

  /**
   * @param {string} name
   */
  async findOneByName(name) {
    const platform = await this.repository.findOneByName(name);
    if (!platform) {
      throw new HttpError(404, "Not found!");
    }
    return platform;
  }

  /**
   * @param {number} id
   * @param {UpdatePlatformDto} UpdatePlatformDto
   */
  async update(id, { name }) {
    const foundPlatform = await this.findOne(id);
    if (foundPlatform.name === name) {
      throw new HttpError(
        404,
        "Bad Request! A platform with this name already exists!",
      );
    }
    return await this.repository.update(id, { name });
  }

  /**
   * @param {number} id
   */
  async delete(id) {
    await this.findOne(id);
    return this.repository.delete(id);
  }
}
