const connection = require('../database/connection');//Importa a conexão com o banco de dados

module.exports = {

    async index(request, response) {//Rota para a exibição da tabela
        const references = await connection('references').select('*');
     
        return response.json(references);
    },

    async create (request, response){
        
        const { problem, id_ordinal_reference } = request.body
        await connection ('references').insert({
            problem,
            id_ordinal_reference  
        });
        return response.json("Done");
    },

    async delete (request,response){
        const { id } = request.params;

    await connection ('references').where('id', id).delete();

    return response.send('Excluido com sucesso')
    },

    async show (request,response){
        const {id} = request.params
        const references = await connection ('references')        
        .where('id_ordinal_reference', id)
        .select('*');

        return response.json(references)
    }
}