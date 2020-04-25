const connection = require('../database/connection');//Importa a conexão com o banco de dados

module.exports = {
    async index (request, response){
     const ordinalReferences  = await connection('ordinalReferences').select('*');

     return response.json(ordinalReferences)
    },

    async create (request, response){
        

        await connection ('ordinalReferences').insert({
            "problems": request.body.problems
        });
        return response.json("Done");
    },

    async delete (request,response){
        const { id } = request.params;

    await connection ('ordinalReferences').where('id', id).delete();

    return response.send('Excluido com sucesso')
    }
};