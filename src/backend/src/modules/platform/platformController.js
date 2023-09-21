export class PlatformsController {
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

  async addGame(req, res, next) {
    try {
      const { id, gameId } = req.params;
      const result = await this.service.addGame(+id, +gameId);
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

  async findOne(req, res, next) {
    try {
      const { id } = req.params;
      const result = await this.service.findOne(+id);
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }

  async update(req, res, next) {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const result = await this.service.update(+id, { name });
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      const result = await this.service.delete(Number(id));
      res.status(204).send(result);
    } catch (err) {
      next(err);
    }
  }
}
