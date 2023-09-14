import { HttpError } from "../../exceptions/httpError.js";
export class CategoriesService {
  constructor(categoriesRepository, usersRepository, gamesRepository) {
    this.categoriesRepository = categoriesRepository;
    this.usersRepository = usersRepository;
    this.gamesRepository = gamesRepository;
  }

  async create({ userId, gameId, category }) {
    const user = await this.usersRepository.findOne(userId);
    if (!user) {
      throw new HttpError(404, "User not found!");
    }
    const game = await this.gamesRepository.findOne(gameId);
    if (!game) {
      throw new HttpError(404, "Game not found!");
    }
    return this.categoriesRepository.create({
      userId,
      gameId,
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

  async findCategoriesByGameId({ gameId }) {
    const game = await this.gamesRepository.findOne(gameId);
    if (!game) {
      throw new HttpError(404, "Game not found!");
    }
    const categories = await this.categoriesRepository.findCategoriesByGameId({
      gameId,
    });
    return categories;
  }

  async findCategoriesByUserId({ userId }) {
    const user = await this.usersRepository.findOne(userId);

    if (!user) {
      throw new HttpError(404, "User not found!");
    }
    const categories = await this.categoriesRepository.findCategoriesByUserId({
      userId,
    });
    return categories;
  }

  async update({ id, category }) {
    const foundCategory = await this.findOne(id);
    if (!foundCategory) {
      throw new HttpError(404, "Category not found!");
    }
    return await this.categoriesRepository.update({ id, category });
  }

  async delete(id) {
    await this.findOne(id);

    return this.categoriesRepository.delete(id);
  }
}
