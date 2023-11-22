import { HttpError } from "../../exceptions/httpError.js";

export class GradesService {
  constructor(gradesRepository, usersRepository, gamesRepository) {
    this.gradesRepository = gradesRepository;
    this.usersRepository = usersRepository;
    this.gamesRepository = gamesRepository;
  }

  find() {
    return this.gradesRepository.find();
  }

  findOne(id) {
    return this.gradesRepository.findOne(id);
  }

  findGradesByUser(userId) {
    return this.gradesRepository.findGradesByUser(userId);
  }

  async create({ user_id, game_id, grade }) {
    const user = await this.usersRepository.findOne(user_id);
    if (!user) {
      throw new HttpError(404, "User not found!");
    }
    const game = await this.gamesRepository.findOne(game_id);
    if (!game) {
      throw new HttpError(404, "Game not found!");
    }
    return this.gradesRepository.create({ user_id, game_id, grade });
  }

  async upsert({ user_id, game_id, grade }) {
    const user = await this.usersRepository.findOne(user_id);
    if (!user) {
      throw new HttpError(404, "User not found!");
    }
    const game = await this.gamesRepository.findOne(game_id);
    if (!game) {
      throw new HttpError(404, "Game not found!");
    }
    return this.gradesRepository.upsert({ user_id, game_id, grade });
  }

  update(id, { grade }) {
    return this.gradesRepository.update(id, { grade });
  }

  delete(id) {
    return this.gradesRepository.delete(id);
  }
}
