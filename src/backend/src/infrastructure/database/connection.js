// @ts-check

import sqlite from "sqlite3";
import { init } from "./queries/migrations/init.js";

export class DatabaseConnection {
  static isInternalConstructing = false;
  /**
   * @type {DatabaseConnection}
   */
  static instance;

  /**
   * @param {string} connString
   */
  constructor(connString) {
    if (!DatabaseConnection.isInternalConstructing) {
      throw new Error("Cannot instantiate singleton class using constructor");
    }
    this.db = new sqlite.Database(connString, (err) => {
      if (err) {
        console.error(err.message);
      }
      this.createTables(init);
      console.log("Connected to the database.");
    });
    DatabaseConnection.isInternalConstructing = false;
  }

  /**
   *
   * @param {string} connString
   * @returns
   */
  static getInstance(connString) {
    if (DatabaseConnection.instance) {
      return DatabaseConnection.instance;
    }
    this.isInternalConstructing = true;
    return new DatabaseConnection(connString);
  }

  /**
   * @param {string} queryString
   * @param {any[]} params
   * @returns {Promise<{id: number, changes: number}>}
   */
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

  /**
   * @param {string} queryString
   * @param {any[]} params
   * @returns {Promise<any[]>}
   */
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

  /**
   *
   * @param {string} queryString
   * @param {any[]} params
   * @returns {Promise<any>}
   */
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

  /**
   *
   * @param {string[]} queries
   */
  createTables(queries) {
    this.db.serialize(() => {
      for (let q of queries) {
        this.db.run(q, (err) => {
          if (err) {
            throw err;
          }
        });
      }
    });
    console.log("tables created");
  }
}
