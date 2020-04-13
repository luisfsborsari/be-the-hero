const connection =  require('../database/connection');

module.exports = {

    async create(request, response){
        const { id } = request.body;

        const ongs = await connection('ongs').where('id', id).select('*');

        if(ongs.length == 0){
            return response.status(404).send();
        }

        return response.json(ongs[0]);
    }
}