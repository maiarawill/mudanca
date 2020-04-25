const knex = require('knex');
const configuration = require ('../../knexfile');//BUsca no knexfile os dados para fazer a conexão com o banco de dados

const connection = knex(configuration.development);//Pega os dados da parte development do knexfile

module.exports = connection;//exporta a conexão que acabou de ser feita