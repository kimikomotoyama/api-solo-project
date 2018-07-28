const Knex = require("knex");
const config = require("./knexfile");

function returnKnex () {
  return require('knex')({
    client: config.client,
    port: config.port,
    connection: {
      host : config.connection.host,
      database : config.connection.database
    }
  });
}

module.exports = returnKnex;