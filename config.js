// const Knex = require("knex");

// module.exports = () => {
//   const config = {
//     client: "pg",
//     connection: {
//       host: "127.0.0.1",
//       database: "cookpod",
//     },
//     port: 5432,
//     pool: {
//       min: 2,
//       max: 10,
//     },
//     migrations: {
//       tableName: "knex_migrations",
//     }
//   }
  
//   const knex = Knex({
//     client: config.client,
//     port: config.connection.port,
//     connection: {
//       host: config.connection.host,
//       database: config.connection.database,
//     },
//   });

//   return knex;
// }