import { HttpError } from "../../exceptions/httpError.js";

export class GradesService {
  constructor(gradesRepository, usersRepository, gamesRepository) {
    this.gradesRepository = gradesRepository;
    this.usersRepository = usersRepository;
    this.gamesRepository = gamesRepository;
  }

  async find() {
    return this.gradesRepository.find();
  }

  async findOne(id) {
    return this.gradesRepository.findOne(id);
  }

  async findGradesByUser(userId) {
    return this.gradesRepository.findGradesByUser(userId);
  }

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

  async update(id, { grade }) {
    return this.gradesRepository.update(id, { grade });
  }

  async delete(id) {
    return this.gradesRepository.delete(id);
  }
}
