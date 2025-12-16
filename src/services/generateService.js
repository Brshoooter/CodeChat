const aiRepository = require('../repositories/aiRepository');

class generateService{
    async generateCode(promptUtilizator){

        console.log("generateService primit promptul utilizatorului: " + promptUtilizator);

        const promptFinal = promptUtilizator;

        const rezultatModel = await aiRepository.comunicateWithModel(promptFinal);

        return rezultatModel;
    }
}

module.exports = new generateService();