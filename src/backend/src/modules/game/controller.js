// @ts-check

import { GamesService } from "./service.js";

export class GamesController {
  constructor() {}
  create(req, res) {
    const ok = req.body;
    const gamesService = new GamesService();
    const result = gamesService.create(ok);
    res.status(201).json(result);
    return;
  }
}
