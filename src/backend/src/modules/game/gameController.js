export class GamesController {
  constructor(service) {
    this.service = service;
  }

  async create(req, res, next) {
    try {
      const result = await this.service.create(req.body);
      return res.status(201).json(result);
    } catch (err) {
      next(err);
    }
  }

  async find(req, res, next) {
    try {
      const result = await this.service.find();
      return res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }

  async findByPlatform(req, res, next) {
    try {
      const { platformId } = req.params;
      const result = await this.service.findByPlatform(+platformId);
      return res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }

  async findGamePlatforms(req, res, next) {
    try {
      const { gameId } = req.params;
      const result = await this.service.findGamePlatforms(+gameId);
      return res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }

  async findOne(req, res, next) {
    try {
      const { id } = req.params;
      const result = await this.service.findOne(+id);
      return res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      const result = await this.service.delete(+id);
      return res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }

  async update(req, res, next) {
    try {
      const { id } = req.params;
      const result = await this.service.update(+id, req.body);
      return res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }

  async associatePlatform(req, res, next) {
    try {
      const { gameId, platformId } = req.params;
      const result = await this.service.associatePlatform({
        gameId: +gameId,
        platformId: +platformId,
      });
      return res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }

  async dissociatePlatform(req, res, next) {
    try {
      const { gameId, platformId } = req.params;
      const result = await this.service.dissociatePlatform({
        gameId: +gameId,
        platformId: +platformId,
      });
      return res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }
}
