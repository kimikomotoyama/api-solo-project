
exports.up = function(knex, Promise) {
  return knex.schema.table("recipes", (table) => {
    table.json("ingredients");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("recipes", (table) => {
    table.drop("ingredients");
  })
};
