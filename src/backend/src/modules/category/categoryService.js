import { HttpError } from "../../exceptions/httpError.js";
export class CategoriesService {
  constructor(categoriesRepository, usersRepository, gamesRepository) {
    this.categoriesRepository = categoriesRepository;
    this.usersRepository = usersRepository;
    this.gamesRepository = gamesRepository;
  }

  async create({ user_id, game_id, category }) {
    const user = await this.usersRepository.findOne(user_id);
    if (!user) {
      throw new HttpError(404, "User not found!");
    }
    const game = await this.gamesRepository.findOne(game_id);
    if (!game) {
      throw new HttpError(404, "Game not found!");
    }
    return this.categoriesRepository.create({
      user_id,
      game_id,
      category,
    });
  }

  async find() {
    return await this.categoriesRepository.find();
  }

  async findOne(id) {
    const category = await this.categoriesRepository.findOne(id);
    if (!category) {
      throw new HttpError(404, "Category not found!");
    }
    return category;
  }

  async findCategoriesByUserAndGame({ userId, gameId }) {
    const user = await this.usersRepository.findOne(userId);
    if (!user) {
      throw new HttpError(404, "User not found!");
    }
    const game = await this.gamesRepository.findOne(gameId);
    if (!game) {
      throw new HttpError(404, "Game not found!");
    }
    return this.categoriesRepository.findCategoriesByUserAndGame({
      userId,
      gameId,
    });
  }

  async findCategoriesByGameId(gameId) {
    const game = await this.gamesRepository.findOne(gameId);
    if (!game) {
      throw new HttpError(404, "Game not found!");
    }
    return this.categoriesRepository.findCategoriesByGameId(gameId);
  }

  async findCategoriesByUserId(userId) {
    const user = await this.usersRepository.findOne(userId);
    if (!user) {
      throw new HttpError(404, "User not found!");
    }
    return this.categoriesRepository.findCategoriesByUserId(userId);
  }

  async update({ id, category }) {
    const foundCategory = await this.findOne(id);
    if (!foundCategory) {
      throw new HttpError(404, "Category not found!");
    }
    return this.categoriesRepository.update({ id, category });
  }

  async delete(id) {
    await this.findOne(id);
    return this.categoriesRepository.delete(id);
  }
}
