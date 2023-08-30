// @ts-check

import { GamesRepository } from "./repository.js";

export class GamesService {
  create({ title, genre, price, developed_by, release_date }) {
    const gameRepository = new GamesRepository();
    gameRepository.create({
      title,
      genre,
      price,
      developed_by,
      release_date,
    });
    return;
  }
}
