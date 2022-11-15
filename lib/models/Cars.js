const pool = require('../utils/pool');

module.exports = class CarModel {
  constructor(row) {
    this.id = row.id;
    this.make = row.make;
    this.model = row.model;
    this.year = row.year;
  }
  static async getAll() {
    const { rows } = await pool.query('SELECT * from cars');

    return rows.map((carRow) => new CarModel(carRow));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * from cars WHERE id = $1', [id]);

    return new CarModel(rows[0]);
  }
};
