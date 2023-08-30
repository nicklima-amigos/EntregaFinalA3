// @ts-check

import express from "express";
import { DatabasConnection } from "./infrastructure/database/connector.js";
import { mainRoutes } from "./routes.js";
export class App {
  /**
   *
   * @param {DatabasConnection} db
   */
  constructor(db) {
    this.db = db;
    this.app = express();
  }

  attachMiddleware() {
    this.app.use(express.json());
  }

  routes() {
    this.app.use(mainRoutes(this.db));
  }

  async init() {
    this.attachMiddleware();
    this.routes();
  }

  listen() {
    console.log("server about to listen");
    return this.app.listen("3000", () => {
      console.log("Server is running on port 3000");
    });
  }
}
