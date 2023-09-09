// @ts-check

import { HttpError } from "../../exceptions/httpError.js";
import { GamesRepository } from "../game/gameRepository.js";
import { UsersRepository } from "../user/userRepository.js";
import { GradesRepository } from "./gradeRepository.js";

export class GradesService {
  /**
   * @param {GradesRepository} gradesRepository
   * @param {UsersRepository} usersRepository
   * @param {GamesRepository} gamesRepository
   */
  constructor(gradesRepository, usersRepository, gamesRepository) {
    this.gradesRepository = gradesRepository;
    this.usersRepository = usersRepository;
    this.gamesRepository = gamesRepository;
  }

  async find() {
    return this.gradesRepository.find();
  }

  /**
   *
   * @param {number} id
   * @returns
   */
  async findOne(id) {
    return this.gradesRepository.findOne(id);
  }

  /**
   *
   * @param {number} userId
   */
  async findGradesByUser(userId) {
    return this.gradesRepository.findGradesByUser(userId);
  }

  /**
   *
   * @param {CreateGradeDto} createGradeDto
   * @returns
   */
  async create({ userId, gameId, grade }) {
    const user = await this.usersRepository.findOne(userId);
    if (!user) {
      throw new HttpError(404, "User not found!");
    }
    const platform = await this.gamesRepository.findOne(gameId);
    if (!platform) {
      throw new HttpError(404, "Game not found!");
    }
    return this.gradesRepository.create({ userId, gameId, grade });
  }

  /**
   * @param {number} id
   * @param {UpdateGradeDto} updateGradeDto
   * @returns
   */
  async update(id, { grade }) {
    return this.gradesRepository.update(id, { grade });
  }

  /**
   *
   * @param {number} id
   * @returns
   */
  async delete(id) {
    return this.gradesRepository.delete(id);
  }
}
