
exports.up = function(knex) {
  return knex.schema.createTable('incidents', function(table){//Código para criar a tabela
      table.increments();//Cria id 
      table.string('asset').notNullable();
      table.integer('id_reference').notNullable();//notNullable é ultilizado para que um atributo não possa ficar vazio
      table.string('user').notNullable();
      table.foreign('id_reference').references('id').inTable('references');//É usado para criar relação entre tabelas
  });
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');//Código para excluir a tabela
};