// @ts-check

import sqlite from 'sqlite3';
import { init } from './queries/migrations/init.js';

export class DatabaseConnector {
  /**
   * @param {string} connString
   */
  constructor(connString) {
    this.db = new sqlite.Database(connString, (err) => {
      if (err) {
        console.error(err.message);
      }
      this.createTables(init);
      console.log('Connected to the database.');
    });
  }

  /**
   * @param {string} queryString
   * @param {any[]} params
   * @param {(err) => void} callback
   */
  exec(queryString, params = [], callback = () => {}) {
    this.db.serialize(() => {
      this.db.run(queryString, params, callback);
    });
  }

  /**
   * @param {string} queryString
   * @param {any[]} params
   * @param {(err, result) => void} callback
   */
  query(queryString, params = [], callback) {
    this.db.serialize(() => {
      this.db.each(queryString, params, callback);
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
            console.error(err.message);
          }
        });
      }
    });
    console.log('tables created');
  }
}
