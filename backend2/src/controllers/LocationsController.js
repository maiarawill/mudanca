const connection = require ('../database/connection')

module.exports = {
    async index (request, response){
        const location = await connection ('locations').select('*');//Requerimento de todos(*) os dados da tabela

        return response.json(location);
    },

    async create (request, response){
        const {room, extension, asset} = request.body

        await connection('locations').insert({
            room,
            extension,
            asset
        });

        return response.json("done");

    },

    async delete (request,response){

        const { id } = request.params;

        await connection('locations').where('id', id).delete();

        return response.send('Excluido com sucesso');
    }
}