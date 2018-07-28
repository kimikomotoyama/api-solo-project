const Knex = require("knex");

function returnKnex () {
  return require('knex')({
    client: 'pg',
    port: 5432,
    connection: {
      host : '127.0.0.1',
      database : 'cookpod'
    }
  });
}

module.exports = returnKnex;