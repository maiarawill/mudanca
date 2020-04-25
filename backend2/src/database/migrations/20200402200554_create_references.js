
exports.up = function(knex) {
  return knex.schema.createTable('references', table =>{
      table.increments();
      table.string('problem').notNullable();
      table.integer('id_ordinal_reference').notNullable();
      table.foreign('id_ordinal_reference').references('id').inTable('ordinalReferences');
      table.timestamps();//É para listar data de criação e mudanças na tabela
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('references');
};
