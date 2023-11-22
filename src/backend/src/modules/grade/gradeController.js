export class GradesController {
  constructor(service) {
    this.service = service;
  }

  async find(req, res, next) {
    try {
      const grades = await this.service.find();
      return res.json(grades);
    } catch (error) {
      next(error);
    }
  }

  async findOne(req, res, next) {
    try {
      const { id } = req.params;

      const grade = await this.service.findOne(+id);
      return res.json(grade);
    } catch (error) {
      next(error);
    }
  }

  async findGradesByUser(req, res, next) {
    try {
      const { userId } = req.params;
      const grades = await this.service.findGradesByUser(+userId);
      return res.json(grades);
    } catch (error) {
      next(error);
    }
  }

  async findGradeByUserAndGame(req, res, next) {
    try {
      const { userId, gameId } = req.params;
      const grades = await this.service.findGradeByUserAndGame(
        +userId,
        +gameId,
      );
      return res.json(grades);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const grade = await this.service.create(req.body);
      return res.json(grade);
    } catch (error) {
      next(error);
    }
  }

  async upsert(req, res, next) {
    try {
      const grade = await this.service.upsert(req.body);
      return res.json(grade);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const { id } = req.params;
      const grade = await this.service.update(+id, req.body);
      return res.json(grade);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      const grade = await this.service.delete(+id);
      return res.json(grade);
    } catch (error) {
      next(error);
    }
  }
}
