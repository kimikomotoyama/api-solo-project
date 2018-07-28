
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', function (table) {
    table.increments();
    table.string('title');
    table.string('servingSize');
    table.string('prepareTime');
    table
      .timestamp("created_at")
      .notNullable()
      .defaultTo(knex.fn.now());
    table
      .timestamp("updated_at")
      .notNullable()
      .defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('recipes');
};
