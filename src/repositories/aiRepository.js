const { default: ollama } = require('ollama');
const { config } = require('../config/env');

class aiRepository {
    async comunicateWithModel(promptPregatit){

        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), config.ollamaTimeoutMs);
        
        try{
            const response = await ollama.chat({
                model: config.ollamaModel,
                messages: [{role: 'user', content: promptPregatit}],
            });

            return response.message.content;
        }catch(error){
            if(error.name === 'AbortError'){
                console.error("Cererea catre Ollama a expirat (Timeout)");
                throw new Error("Cererea a dureat prea mult. Incearca din nou.");
            }
            console.error("Eroare in aiRepository", error);
            throw error;
        } finally{
            clearTimeout(timeout);
        }
    }
}

module.exports = new aiRepository();