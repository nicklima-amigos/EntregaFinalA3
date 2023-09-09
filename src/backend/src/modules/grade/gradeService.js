// @ts-check

import { PlatformsRepository } from "../platform/platformRepository";
import { UsersRepository } from "../user/userRepository";
import { GradesRepository } from "./gradeRepository";

export class GradesService {
  /**
   * @param {GradesRepository} gradesRepository
   * @param {UsersRepository} usersRepository
   * @param {PlatformsRepository} platformsRepository
   */
  constructor(gradesRepository, usersRepository, platformsRepository) {
    this.gradesRepository = gradesRepository;
    this.usersRepository = usersRepository;
    this.platformsRepository = platformsRepository;
  }

  async find() {
    return this.gradesRepository.find();
  }
}
