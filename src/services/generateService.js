class generateService{
    async generateCode(promptUtilizator){

        console.log("generateService primit promptul utilizatorului: " + promptUtilizator);

        const raspSimulare = "Codul generat de modelul ai";

        return raspSimulare;
    }
}

module.exports = new generateService();