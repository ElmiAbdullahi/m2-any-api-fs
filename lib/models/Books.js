const pool = require('../utils/pool.js');

module.exports = class BookModel {
  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.author = row.author;
    this.published = row.published;
  }
  static async getAll() {
    const { rows } = await pool.query('SELECT * from books2');

    return rows.map((bookRow) => new BookModel(bookRow));
  }

  //   static async getById(id) {
  //     const { rows } = await pool.query('SELECT * from books WHERE id = $1', [
  //       id,
  //     ]);

  //     return new BookModel(rows[0]);
  //   }
};
