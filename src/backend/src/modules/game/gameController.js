export class GamesController {
  constructor(service) {
    this.service = service;
  }

  async create(req, res, next) {
    try {
      const result = await this.service.create(req.body);
      res.status(201).json(result);
    } catch (err) {
      next(err);
    }
  }

  async find(req, res, next) {
    try {
      const result = await this.service.find();
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }

  async findByPlatform(req, res, next) {
    try {
      const { platformId } = req.params;
      const result = await this.service.findByPlatform(+platformId);
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }

  async findOne(req, res, next) {
    try {
      const { id } = req.params;
      const result = await this.service.findOne(+id);
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      const result = await this.service.delete(+id);
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }

  async update(req, res, next) {
    try {
      const { id } = req.params;
      const result = await this.service.update(+id, req.body);
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }
}
