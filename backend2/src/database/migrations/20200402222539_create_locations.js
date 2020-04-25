
exports.up = function(knex) {
  return knex.schema.createTable('locations', table =>{
      table.increments();
      table.integer('room').notNullable();
      table.integer('extension').notNullable();
      table.string('asset').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('locations');
};
