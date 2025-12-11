const generateService = require('../services/generateService');

class generateController{

    async generate(req, res){
        try{
            const { prompt } = req.body;

            console.log("Cerere primita! se trimite la service.");

            if(!prompt){
                return res.status(400).json({error: "scrie ceva in cerere"});
            }

            const rezultat = await generateService.generateCode(prompt);

            console.log("Raspuns primit de la service");

            res.json({ response: rezultat });

        }catch(error){
            console.error("eroare in generateController");
            res.status(500).json({ error:" Ceva nu a mers bine" });
        }
    }
}

module.exports = new generateController();