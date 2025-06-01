const { Model } = require('objection');

class Pengguna extends Model {
  static get tableName() {
    return 'pengguna';
  }
}

module.exports = Pengguna;