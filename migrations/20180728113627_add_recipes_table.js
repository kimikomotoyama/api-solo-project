
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', function (table) {
    table.increments();
    table.string('title');
    table.string('servingSize');
    table.string('prepareTime');
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('recipes');
};
