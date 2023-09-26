export class CategoriesController {
  constructor(service) {
    this.service = service;
  }

  async create(req, res, next) {
    try {
      const category = await this.service.create(req.body);
      res.status(201).json(category);
    } catch (error) {
      next(error);
    }
  }

  async find(req, res, next) {
    try {
      const categories = await this.service.find();
      res.status(200).json(categories);
    } catch (error) {
      next(error);
    }
  }

  async findCategoriesByGameId(req, res, next) {
    try {
      const { gameId } = req.params;
      const categories = await this.service.findCategoriesByGameId({ gameId });
      res.status(200).json(categories);
    } catch (error) {
      next(error);
    }
  }

  async findCategoriesByUserId(req, res, next) {
    try {
      const { userId } = req.params;
      const categories = await this.service.findCategoriesByUserId({ userId });
      res.status(200).json(categories);
    } catch (error) {
      next(error);
    }
  }

  async findOne(req, res, next) {
    try {
      const { id } = req.params;
      const category = await this.service.findOne(Number(id));
      res.status(200).json(category);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const { id } = req.params;
      const { category } = req.body;
      const result = await this.service.update({ id: Number(id), category });
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      await this.service.delete(Number(id));
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}
