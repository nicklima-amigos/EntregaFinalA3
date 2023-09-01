// @ts-check
import Platform from "./platformModel.js";
import { PlatformsRepository } from "./platformRepository.js";
import "./dto/createPlatformDto.js";
import "./dto/findOnePlatformDto.js";
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
    console.log({ name });
    const existingPlatform = await this.repository.findOneByName(name);
    if (existingPlatform) {
      throw {
        status: 400,
        message: "Bad Request! Platform already exists!",
      };
    }
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
      throw {
        status: 404,
        message: "Not found!",
      };
    }
    return platform;
  }

  /**
   * @param {string} name
   */
  async findOneByName(name) {
    return this.repository.findOneByName(name);
  }

  /**
   * @param {UpdatePlatformDto} UpdatePlatformDto
   */
  async update({ id, name }) {
    const foundPlatform = await this.repository.findOne(id);
    if (!foundPlatform) {
      throw {
        status: 404,
        message: "Not found!",
      };
    }
    if (foundPlatform.name === name) {
      throw {
        status: 400,
        message:
          "Bad Request! You cannot change the platform name to the same name!",
      };
    }
    return await this.repository.update({ id, name });
  }

  /**
   * @param {number} id
   */
  async delete(id) {
    const foundPlatform = await this.repository.findOne(id);
    if (!foundPlatform) {
      throw {
        status: 404,
        message: "Not found!",
      };
    }
    return this.repository.delete(id);
  }
}
