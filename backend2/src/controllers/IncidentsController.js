const connection = require('../database/connection');//Importa a conexão com o banco de dados


module.exports = {
    async index(request, response) {//Rota para a exibição da tabela
        const {page = 1} = request.query // desestruturando a url do browser para informar qual página o usuario esta navegando
        const incidents = await connection('incidents')
        .join('references', 'references.id', '=', 'incidents.id_reference')//Faz a relação da tabela de incident com a tabela de references
        .join('locations', 'locations.asset', '=', 'incidents.asset' )
        .limit(5)//Aqui limito o numéro de registros por página
        .offset((page - 1) * 5)
        .select([
            'incidents.*',
            'references.problem',
            'locations.extension',
            'locations.room']);
     
        return response.json(incidents);//Retorna os dados da constante
    },

    async create(request, response){
        const {id_reference, user, asset} = request.body;//desestruturação das informações que seram recebidas
    //const id_reference = request.body.id_reference ---- o id_reference vai junto ao request.body, pois quero a requisição daquele valor, se não seria retornado a tabela por inteiro
    //id_reference vai virar uma constante id_reference com o valor do request.body.id_reference
    
    await connection('incidents').insert({
        id_reference, // "id_reference": request.body.id_reference
        user,
        asset

    });

    return response.json("Done");
    },

    async delete (request, response){
        const { id } = request.params;//destrutura o id da url

        await connection('incidents').where('id', id).delete();
        return response.send("Excluido com sucesso")
    }
}