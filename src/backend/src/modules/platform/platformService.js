// @ts-check
import Platform from './platformModel.js'
import { PlatformsRepository } from "./platformRepository.js";
import './dto/createPlatformDto.js';
import './dto/findOnePlatformDto.js';
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
    return this.repository.create({
      name
    });
  }


  /**
 * @returns {Promise<Platform[]>}
 */
  async find() {
    return this.repository.find();
  }


  /**
  * @param {FindOnePlatformDto} FindOnePlatformDto
  */
  async findOne({ id }) {
    const result = await this.repository.findOne({ id });
    return result
  }

  /**
* @param {UpdatePlatformDto} UpdatePlatformDto
*/
  async update({ id, name }) {
    const foundPlatform = await this.repository.findOne({ id });
    if (!foundPlatform || foundPlatform.name === name) {
      return foundPlatform
    }
    Object.assign(foundPlatform, {
      name
    })
    const updatedPlatform = await this.repository.update({ id, name });
    return updatedPlatform
  }

  /**
* @param {deletePlatformDto} deletePlatformDto
*/
  async delete({ id }) {
    const foundPlatform = await this.repository.findOne({ id });
    if (!foundPlatform) {
      return foundPlatform
    }
    await this.repository.delete({ id });
    return foundPlatform
  }
}
