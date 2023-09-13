import sqlite from "sqlite3";
import { init } from "./queries/migrations/init.js";
import { fixtures } from "./queries/fixtures/fixtures.js";

export class DatabaseConnection {
  static __instance;
  static __isInternalConstructing = false;

  constructor(connString) {
    if (!DatabaseConnection.__isInternalConstructing) {
      throw new Error("Cannot instantiate singleton class using constructor");
    }
    this.db = new sqlite.Database(connString, (err) => {
      if (err) {
        console.error(err.message);
      }
      this.createTables().then(() => this.insertFixtures());
      console.log("Connected to the database.");
    });
    DatabaseConnection.__isInternalConstructing = false;
  }

  static getInstance(connString) {
    if (DatabaseConnection.__instance) {
      return DatabaseConnection.__instance;
    }
    this.__isInternalConstructing = true;
    this.__instance = new DatabaseConnection(connString);
    return this.__instance;
  }

  async exec(queryString, params = []) {
    return new Promise((resolve, reject) => {
      this.db.run(queryString, params, function (err) {
        if (err) {
          reject(err);
          return;
        }
        resolve({ id: this.lastID, changes: this.changes });
      });
    });
  }

  async query(queryString, params = []) {
    return new Promise((resolve, reject) => {
      this.db.all(queryString, params, (err, rows) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(rows);
      });
    });
  }

  async queryOne(queryString, params = []) {
    return new Promise((resolve, reject) => {
      this.db.get(queryString, params, (err, row) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(row);
      });
    });
  }
  async initialize() {}

  async createTables() {
    for (let q of init) {
      await this.exec(q);
    }
    console.log("Tables created");
  }

  async insertFixtures() {
    try {
      for (let q of fixtures) {
        await this.exec(q);
      }
    } catch (e) {
      console.log("Failed to insert fixtures. Probably already inserted.");
    }
  }
}
