
exports.up = function(knex) {
  return knex.schema.createTable('ordinalReferences', table =>{
    table.increments();
    table.string('problems');
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('ordinalReferences');

};
